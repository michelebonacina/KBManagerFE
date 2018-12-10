import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-error-popup',
  templateUrl: './error-popup.component.html',
  styleUrls: ['./error-popup.component.css']
})
export class ErrorPopupComponent implements OnInit {

  errorService: ErrorService;

  constructor(
    errorService: ErrorService,
  ) {
    this.errorService = errorService;
  }

  ngOnInit() {
  }

  public isError() {
    return this.errorService.isError();
  }

  public getMessage() {
    return this.errorService.getErrorMessage();
  }

  public hide() {
    this.errorService.hideError();
  }

}
