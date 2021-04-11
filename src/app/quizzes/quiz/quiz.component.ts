import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input()
  quiz: Quiz;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  quizDeleted: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor() {
    console.log('in quiz.constructor');
	  // console.log('quiz name:', this.quiz.name);
  }

  ngOnInit() {
    console.log('in quiz.ngOnInit');
	  console.log('quiz name:', this.quiz.name);
  }

  selectQuiz() {
    console.log('in quiz.selectQuiz');
	  this.quizSelected.emit(true);
  }
  deleteQuiz() {
    console.log('in quiz.deleteQuiz');
	  this.quizDeleted.emit(this.quiz);
  }
}
