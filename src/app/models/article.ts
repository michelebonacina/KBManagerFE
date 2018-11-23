import { Topic } from './topic';
import { TopicType } from './topic-type';
import { Magazine } from './magazine';

export class Article extends Topic {

    constructor(
        public title: string,
        public description: string,
        public page: number,
        public magazine: Magazine,
    ) {
        super(TopicType.Article, title, description);
    }
}
