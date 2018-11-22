import { Topic } from './topic';
import { TopicType } from './topic-type';

export class Document extends Topic {

    constructor(
        public title: string,
        public description: string,
    ) {
        super(TopicType.Document, title, description);
    }
}
