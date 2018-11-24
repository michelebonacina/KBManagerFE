import { Topic } from './topic';
import { TopicType } from './topic-type';
import { Tag } from './tag';

export class WebDocument extends Topic {

    constructor(
        public title: string,
        public description: string,
        public url: string,
        public tags?: Tag[],
    ) {
        super(TopicType.WebDocument, title, description, tags);
    }
}
