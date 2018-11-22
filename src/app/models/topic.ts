import { TopicType } from './topic-type';

export abstract class Topic {

    constructor(
        public type: TopicType,
        public title: string,
        public description: string,
    ) {
    }

}
