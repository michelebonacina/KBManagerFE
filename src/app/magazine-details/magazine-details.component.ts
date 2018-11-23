import { Component, OnInit, Input } from '@angular/core';
import { Magazine } from '../models/magazine';

@Component({
  selector: 'app-magazine-details, [app-magazine-details]',
  templateUrl: './magazine-details.component.html',
  styleUrls: ['./magazine-details.component.css']
})
export class MagazineDetailsComponent implements OnInit {

  @Input() magazine: Magazine;

  constructor() { }

  ngOnInit() {
  }

}
