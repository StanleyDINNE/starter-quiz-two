import { Question } from './question.model';

export interface Quiz {
    name: string;
    theme?: string;
	icon_class?: string;
	​creationDate?: Date;
    questions: Question[];
}
