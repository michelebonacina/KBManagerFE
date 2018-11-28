import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Magazine } from '../models/magazine';
import { MagazineApiService } from '../services/magazine-api.service';

@Component({
  selector: 'app-magazine-list',
  templateUrl: './magazine-list.component.html',
  styleUrls: ['./magazine-list.component.css']
})
export class MagazineListComponent implements OnInit {

  magazines: Magazine[];
  showInsertForm = false;
  magazineForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private magazineApiService: MagazineApiService,
  ) {
    this.magazineForm = formBuilder.group(
      {
        'title': [null],
        'number': [null],
        'year': [null],
        'month': [null],
        'pages': [null],
        'editor': [null],
      }
    );
  }

  ngOnInit() {
    this.findAll();
  }

  public findAll() {
    this.magazineApiService.findAll()
      .then(
        data => {
          this.magazines = data;
        }
      );
  }

  public newDataForm() {
    this.showInsertForm = true;
    console.log(this.showInsertForm);
  }



}
