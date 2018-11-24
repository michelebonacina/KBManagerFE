import { Topic } from './topic';
import { TopicType } from './topic-type';
import { Tag } from './tag';

export class Book extends Topic {

    constructor(
        public title: string,
        public description: string,
        public pages: number,
        public tags?: Tag[],
    ) {
        super(TopicType.Book, title, description, tags);
    }
}
