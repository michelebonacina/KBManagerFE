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

  public showForm() {
    this.magazineEditComponent.show();
  }

}
