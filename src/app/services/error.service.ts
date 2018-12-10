import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private error = false;
  private message: string;

  constructor(
  ) { }

  public showError(message: string) {
    this.message = message;
    this.error = true;
  }

  public hideError() {
    this.message = '';
    this.error = false;
  }

  public isError(): boolean {
    return this.error;
  }

  public getErrorMessage(): string {
    return this.message;
  }

}

