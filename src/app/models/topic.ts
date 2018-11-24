import { TopicType } from './topic-type';
import { Tag } from './tag';

export abstract class Topic {

    constructor(
        public type: TopicType,
        public title: string,
        public description: string,
        public tags?: Tag[],
    ) {
    }

}
