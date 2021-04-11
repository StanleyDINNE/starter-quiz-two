import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  public quizList: Quiz[] = [];

  constructor(public quizService: QuizService) {
    console.log('in quiz-list.constructor');
    this.quizService.quizzes$.subscribe((quizList) => {
      this.quizList = quizList;
      this.quizSelected(true);
    });
  }

  ngOnInit() {
    console.log('in quiz-list.ngOnInit');
  }

  quizSelected(selected: boolean) {
    console.log('in quiz-list.quizSelected');
    console.log('event received from child:', selected);
  }

  deleteQuiz(quiz: Quiz) {
    console.log('in quiz-list.deleteQuiz');
    this.quizService.​deleteQuiz(quiz);
  }

  importAllQuiz() {
    this.quizService.​getQuizzes();
  }
}
