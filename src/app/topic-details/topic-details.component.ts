import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../models/topic';

@Component({
  selector: 'app-topic-details,[app-topic-details]',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {

  @Input() topic: Topic;

  constructor() { }

  ngOnInit() {
  }

}
