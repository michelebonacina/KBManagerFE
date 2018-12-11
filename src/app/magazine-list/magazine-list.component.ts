import { Component, OnInit } from '@angular/core';
import { Magazine } from '../models/magazine';
import { MagazineApiService } from '../services/magazine-api.service';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-magazine-list',
  templateUrl: './magazine-list.component.html',
  styleUrls: ['./magazine-list.component.css'],
})
export class MagazineListComponent implements OnInit {

  magazines: Magazine[];
  showInsertForm = false;
  errorService: ErrorService;
  constructor(
    errorService: ErrorService,
    private magazineApiService: MagazineApiService,
  ) {
    this.errorService = errorService;
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

}
