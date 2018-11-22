import { Topic } from './topic';
import { TopicType } from './topic-type';

export class Book extends Topic {

    constructor(
        public title: string,
        public description: string,
        public pages: number,
    ) {
        super(TopicType.Book, title, description);
    }
}
