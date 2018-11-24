import { Topic } from './topic';
import { TopicType } from './topic-type';
import { Magazine } from './magazine';
import { Tag } from './tag';

export class Article extends Topic {

    constructor(
        public title: string,
        public description: string,
        public page: number,
        public magazine: Magazine,
        public tags?: Tag[],
    ) {
        super(TopicType.Article, title, description, tags);
    }
}
