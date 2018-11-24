import { Component, OnInit, Input } from '@angular/core';
import { WebDocument } from '../models/web-document';

@Component({
  selector: 'app-web-document-details, [app-web-document-details]',
  templateUrl: './web-document-details.component.html',
  styleUrls: ['./web-document-details.component.css']
})
export class WebDocumentDetailsComponent implements OnInit {

  @Input() webDocument: WebDocument;

  constructor() { }

  ngOnInit() {
  }

}
