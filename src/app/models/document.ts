import { Topic } from './topic';
import { TopicType } from './topic-type';
import { Tag } from './tag';
import { DocumentFormat } from './document-format';

export class Document extends Topic {

    constructor(
        public title: string,
        public description: string,
        public format: DocumentFormat,
        public tags?: Tag[],
    ) {
        super(TopicType.Document, title, description, tags);
    }
}
