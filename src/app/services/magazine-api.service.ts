import { Injectable } from '@angular/core';
import { Magazine } from '../models/magazine';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { ErrorService } from './error.service';


@Injectable({
  providedIn: 'root'
})
export class MagazineApiService {

  private serverAddress = 'http://localhost:8080';
  private serviceAddress = '/api/magazine';
  private magazineObservable: Observable<any>;
  private observer: any;

  constructor(
    private errorService: ErrorService,
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
            this.errorService.showError('Error finding magazines! ' + (error.body || error._body || error.message || error.code || error));
          }
        }
      );
  } // getMagazines

  public save(magazine: Magazine) {
    if (magazine.id && magazine.id !== '') {
      console.log('update');
      // existing magazine
      this.http
        .put(this.serverAddress + this.serviceAddress + '/' + magazine.id , JSON.stringify(magazine), this.getHttpOptions())
        .toPromise()
        .then(
          () => {
            this.findAll();
          })
        .catch(
          (error) => {
            this.errorService.showError('Error updating magazine! ' + (error.body || error._body || error.message || error.code || error));
          });
    } else {
      console.log('create');
      // new magazine
      this.http
        .post(this.serverAddress + this.serviceAddress, JSON.stringify(magazine), this.getHttpOptions())
        .toPromise()
        .then(
          () => {
              this.findAll();
            })
        .catch(
          (error) => {
            this.errorService.showError('Error creating magazine! ' + (error.body || error._body || error.message || error.code || error));
          });

    }
  } // save

} // MagazineApiService
