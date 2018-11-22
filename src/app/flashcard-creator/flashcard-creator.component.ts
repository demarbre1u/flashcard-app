import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageManager } from '../localstorage.manager';
import { routerTransition } from '../router.animations';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material';

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
        color: getComputedStyle(document.body).getPropertyValue('--fc-color-1'),
      },
      {
        id: 2,
        color: getComputedStyle(document.body).getPropertyValue('--fc-color-2'),
      },
      {
        id: 3,
        color: getComputedStyle(document.body).getPropertyValue('--fc-color-3'),
      },
      {
        id: 4,
        color: getComputedStyle(document.body).getPropertyValue('--fc-color-4'),
      },
      {
        id: 5,
        color: getComputedStyle(document.body).getPropertyValue('--fc-color-5'),
      },
      {
        id: 6,
        color: getComputedStyle(document.body).getPropertyValue('--fc-color-6'),
      },
  ]

  currentId: string

  @Input() card = {question:'', answer: '', color: this.colors[0].color}
  
  constructor(private router: Router, private route: ActivatedRoute, private storage: LocalStorageManager, public dialog: MatDialog) { }

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
      this.dialog.open(AlertDialogComponent, {
        width: '80vw',
      });

      return
    }

    this.storage.addCardToCollection(this.currentId, this.card)

    this.router.navigateByUrl('');
  }
}
