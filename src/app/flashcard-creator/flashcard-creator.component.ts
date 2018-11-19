import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { LocalStorageManager } from '../localstorage.manager';

import { routerTransition } from '../router.animations';
import { NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flashcard-creator',
  templateUrl: './flashcard-creator.component.html',
  styleUrls: ['./flashcard-creator.component.css'],
  
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class FlashcardCreatorComponent implements OnInit {
  colors = [
      {
        id: 1,
        color: "#f39c12",
      },
      {
        id: 2,
        color: "#c0392b",
      },
      {
        id: 3,
        color: "#2980b9",
      },
      {
        id: 4,
        color: "#27ae60",
      },
      {
        id: 5,
        color: "#2c3e50",
      },
      {
        id: 6,
        color: "#8e44ad",
      },
  ]

  currentId: string

  @Input() card = {question:'', answer: '', color: '#2c3e50'}
  
  constructor(private router: Router, private route: ActivatedRoute, private storage: LocalStorageManager, private notifierService: NotifierService) { }

  ngOnInit() { 
    this.route.params.subscribe((params) => {this.currentId = params['id']});
  }

  updateQuestion(event) {
    this.card.question = event.srcElement.value
  }

  updateAnswer(event) {
    this.card.answer = event.srcElement.value
  }

  updateColor(colorId) {
    this.card.color = (this.colors.filter( (elem) => elem.id === colorId))[0].color
  }

  saveCard() {
    if(this.card.question === '' || this.card.answer === '') {
      this.notifierService.notify('error', "You can't save an incomplete card!")
      
      return
    }

    this.storage.addCardToCollection(this.currentId, this.card)

    this.router.navigateByUrl('list');
  }
}
