import { Topic } from './topic';
import { TopicType } from './topic-type';

export class Article extends Topic {

    constructor(
        public title: string,
        public description: string,
        public page: number,
    ) {
        super(TopicType.Article, title, description);
    }
}
