import { Topic } from './topic';
import { TopicType } from './topic-type';
import { Tag } from './tag';

export class Document extends Topic {

    constructor(
        public title: string,
        public description: string,
        public tags?: Tag[],
    ) {
        super(TopicType.Document, title, description, tags);
    }
}
