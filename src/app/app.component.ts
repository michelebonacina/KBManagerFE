import { Component } from '@angular/core';
import { Topic } from './models/topic';
import { Book } from './models/book';
import { Article } from './models/article';
import { Magazine } from './models/magazine';
import { Tag } from './models/tag';
import { DocumentFormat } from './models/document-format';
import { Document } from './models/document';
import { WebDocument } from './models/web-document';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kb-manager-fe';
  showDetails = false;
  managementType = '';

  // m1: Magazine = new Magazine('1', 'IoProgrammo', 2018, 2, 223, 74, 'Edizioni Master');
  m1: Magazine = new Magazine();
  t1: Topic = new Book('Java by example', 'Manuale java', 156, [new Tag('java')]);
  t2: Topic = new Book('Spring by example', 'Manuale spring', 352, [new Tag('java'), new Tag('spring'), new Tag('web')]);
  t3: Topic = new Article('Un solo codice per tutti i device',
    'Una libreria universale per desktop e mobile realizzata in Microsoft .Net', 12, this.m1, [new Tag('.net')]);
  t4: Topic = new Document('Angular by example', 'Manuale angular', new DocumentFormat('pdf'),
    [new Tag('angular'), new Tag('javascript'), new Tag('typescript'), new Tag('web')]);
  t5: Topic = new WebDocument('Spring on the web', 'Manuale spring',
    // tslint:disable-next-line:max-line-length
    'http://www.davismol.net/2017/07/16/creare-una-web-application-con-spring-boot-mongodb-angularjs-4-e-typescript-e-deployarla-in-cloud-come-microsoft-azure-webapp-parte-1/',
    [new Tag('java'), new Tag('spring'), new Tag('web')]);
  topics: Topic[] = [this.t1, this.t2, this.t3, this.t4, this.t5];

  public showManagement(managementType: string) {
    this.showDetails = true;
    this.managementType = managementType;
  }

}
