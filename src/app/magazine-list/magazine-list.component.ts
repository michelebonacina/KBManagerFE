import { Component, OnInit, ViewChild } from '@angular/core';
import { Magazine } from '../models/magazine';
import { MagazineApiService } from '../services/magazine-api.service';
import { ErrorService } from '../services/error.service';
import { MagazineEditComponent } from '../magazine-edit/magazine-edit.component';

@Component({
  selector: 'app-magazine-list',
  templateUrl: './magazine-list.component.html',
  styleUrls: ['./magazine-list.component.css'],
})
export class MagazineListComponent implements OnInit {

  @ViewChild(MagazineEditComponent)
  private magazineEditComponent: MagazineEditComponent;
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
          this.errorService.showError('Error loading Magazines! ' + (error.message || + error.code || error));
        }
      }
    );
    this.listMagazines();
  } // ngOnInit

  public listMagazines() {
    // find all magazines
    this.magazineApiService.findAll();
  } // findAll

  public showInsertForm() {
    this.magazineEditComponent.newMagazine();
  } // showInsertForm

  public showEditForm(magazine: Magazine) {
    this.magazineEditComponent.editMagazine(magazine);
  } // showEditForm

} // MagazineListComponent
