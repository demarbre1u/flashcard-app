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

    this.router.navigateByUrl('list');
  }
}
