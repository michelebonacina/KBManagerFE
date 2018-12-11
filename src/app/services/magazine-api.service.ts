import { Injectable } from '@angular/core';
import { Magazine } from '../models/magazine';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MagazineApiService {

  private serverAddress = 'http://localhost:8080';
  private serviceAddress = '/api/magazine';
  private magazineObservable: Observable<any>;
  private observer: any;

  constructor(
    private http: Http,
  ) {
    this.magazineObservable = new Observable(
      (observer) => {
        this.observer = observer;
        this.findAll();
      }
    );
  } // constructor

  private getHttpOptions(): any {
    return {
      headers: new Headers(
        {
          'Content-Type': 'application/json',
        }
      )
    };
  } // getHttpOptions

  public getObservable() {
    return this.magazineObservable;
  } // getObservable

  public findAll() {
    this.http
      .get(this.serverAddress + this.serviceAddress + '/all')
      .subscribe(
        {
          next: response => {
            this.observer.next(response.json() as Magazine[]);
          },
          error: error => {
            console.error(error.message || error.code || error);
            // TODO: show error message
          }
        }
      );
  } // getMagazines

  public save(magazine: Magazine) {
    this.http
      .post(this.serverAddress + this.serviceAddress, JSON.stringify(magazine), this.getHttpOptions())
      .subscribe(
        {
          next: response => {
            this.findAll();
          },
          error: error => {
            console.error(error.message || error.code || error);
            // TODO: show error message
          }
        }
      );
  } // save

} // MagazineApiService
