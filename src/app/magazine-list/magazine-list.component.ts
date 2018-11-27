import { Component, OnInit } from '@angular/core';
import { Magazine } from '../models/magazine';
import { MagazineApiService } from '../services/magazine-api.service';

@Component({
  selector: 'app-magazine-list',
  templateUrl: './magazine-list.component.html',
  styleUrls: ['./magazine-list.component.css']
})
export class MagazineListComponent implements OnInit {

  magazines: Magazine[];

  constructor(
    private magazineApiService: MagazineApiService,
  ) { }

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



}
