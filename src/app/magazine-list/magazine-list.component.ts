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

  showDetails = false;
  magazines: Magazine[];
  errorService: ErrorService;

  constructor(
    errorService: ErrorService,
    private magazineApiService: MagazineApiService,
  ) {
    this.errorService = errorService;
  } // constructor

  ngOnInit() {
    this.magazineApiService.getObservable().subscribe(
      {
        next: magazines => {
          this.magazines = magazines;
        },
        error: error => {
          this.errorService.showError('Error loading Magazines! ' + (error.body || error._body || error.message || + error.code || error));
        }
      }
    );
    this.listMagazines();
  } // ngOnInit

  public listMagazines() {
    // find all magazines
    this.magazineApiService.findAll();
  } // findAll

} // MagazineListComponent
