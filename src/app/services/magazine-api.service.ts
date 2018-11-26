import { Injectable } from '@angular/core';
import { Magazine } from '../models/magazine';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MagazineApiService {

  private serverAddress = 'http://localhost:8080';
  private serviceAddress = '/api/magazine';
  constructor(
    private http: Http,
  ) { }

  public findAll(): Promise<Magazine[]> {
    return this.http
      .get(this.serverAddress + this.serviceAddress + '/all')
      .toPromise()
      .then(
        response => response.json() as Magazine[]
      );
  }
}
