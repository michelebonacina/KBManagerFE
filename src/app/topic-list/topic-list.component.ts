import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../models/topic';
import { TopicType } from '../models/topic-type';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  public showTopicDetails: boolean[];

  @Input() topics: Topic[];

  constructor() { }

  ngOnInit() {
    this.showTopicDetails = [];
    this.topics.forEach( () => this.showTopicDetails.push(false));
  }

  getFontNameByTopicType(topicType: TopicType): string {
      let toReturn = '';
      switch (topicType) {
        case TopicType.Article: {
          toReturn = 'fa-indent';
          break;
        }
        case TopicType.Book: {
          toReturn = 'fa-book';
          break;
        }
        case TopicType.Document: {
          toReturn = 'fa-file-alt';
          break;
        }
        case TopicType.WebDocument: {
          toReturn = 'fa-link';
          break;
        }

      }
      return toReturn;
    }

}
