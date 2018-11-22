import { Topic } from './topic';
import { TopicType } from './topic-type';

export class WebDocument extends Topic {

    constructor(
        public title: string,
        public description: string,
    ) {
        super(TopicType.WebDocument, title, description);
    }
}
