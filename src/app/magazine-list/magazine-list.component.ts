import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Magazine } from '../models/magazine';
import { MagazineApiService } from '../services/magazine-api.service';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-magazine-list',
  templateUrl: './magazine-list.component.html',
  styleUrls: ['./magazine-list.component.css']
})
export class MagazineListComponent implements OnInit {

  magazines: Magazine[];
  showInsertForm = false;
  magazineForm: FormGroup;
  errorService: ErrorService;
  constructor(
    formBuilder: FormBuilder,
    errorService: ErrorService,
    private magazineApiService: MagazineApiService,
  ) {
    this.errorService = errorService;
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
        })
      .catch(
        error => {
          this.errorService.showError('Error loading Magazines! ' + (error.message || + error.code || error));
        }
      );
  }

  public newDataForm() {
    this.showInsertForm = true;
  }



}
