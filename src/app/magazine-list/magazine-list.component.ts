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
    public magazineApiService: MagazineApiService,
  ) { }

  ngOnInit() {
    this.magazineApiService.findAll()
      .then(
        data => {
          console.log(JSON.stringify(data));
          this.magazines = data;
        }
      );
  }



}
