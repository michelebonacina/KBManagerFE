import { Component } from '@angular/core';
import { Topic } from './models/topic';
import { Book } from './models/book';
import { Article } from './models/article';
import { Magazine } from './models/magazine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kb-manager-fe';

  m1: Magazine = new Magazine('IoProgrammo', 2018, 2, 223, 'Edizioni Master', 74);
  t1: Topic = new Book('Java by example', 'Manuale java', 156);
  t2: Topic = new Book('Spring by example', 'Manuale spring', 352);
  t3: Topic = new Article('Un solo codice per tutti i device',
    'Una libreria universale per desktop e mobile realizzata in Microsoft .Net', 12, this.m1);
  t4: Topic = new Book('Angular by example', 'Manuale angular', 192);
  topics: Topic[] = [this.t1, this.t2, this.t3, this.t4];

}
