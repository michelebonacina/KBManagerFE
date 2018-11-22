import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../models/topic';
import { TopicType } from '../models/topic-type';

@Component({
  selector: 'app-topic-details,[app-topic-details]',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {

  public showTopicDetails = false;
  public showTopicDetailsLink = false;

  @Input() topic: Topic;

  constructor() { }

  ngOnInit() {
  }

  getFontNameByTopicType(topicType: TopicType): string {
    let toReturn = '';
    switch (topicType) {
      case TopicType.Article: {
        toReturn = 'fa-newspaper';
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
