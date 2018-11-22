import { Component } from '@angular/core';
import { Topic } from './models/topic';
import { Book } from './models/book';
import { Article } from './models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kb-manager-fe';

  t1: Topic = new Book('Java by example', 'Manuale java', 156);
  t2: Topic = new Book('Spring by example', 'Manuale spring', 352);
  t3: Topic = new Article('Java in 5 minutes', 'Articolo Java', 12);
  t4: Topic = new Book('Angular by example', 'Manuale angular', 192);
  topics: Topic[] = [this.t1, this.t2, this.t3, this.t4];

}
