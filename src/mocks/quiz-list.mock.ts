import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les tuches III',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: true,
        }
    ]
};

export const QUESTION_SPORT: Question = {
	label: 'Quel sport se pratique nu ?',
	answers: [
		{
			value: 'Aucun',
			isCorrect: false
		},
		{
			value: 'La lutte',
			isCorrect: false
		},
		{
			value: 'la réponse D',
			isCorrect: true
		},
		{
			value: 'Prendre une douche',
			isCorrect: true
		},
	]
}

export const QUIZ_LIST: Quiz[] = [
	{
		name: 'Les Acteurs', // What's happening if I change this value..?
		theme: 'Actor',
		icon_class: 'fab fa-leanpub',
		questions: [QUESTION_ACTOR]
	},
	{
		name: 'Les Sports divers',
		icon_class: 'fab fa-500px',
		questions: [QUESTION_SPORT]
	}
];
