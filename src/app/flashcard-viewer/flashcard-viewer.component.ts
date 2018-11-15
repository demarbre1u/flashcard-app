import { Component, OnInit } from '@angular/core';
import { LocalStorageManager } from '../localstorage.manager';

@Component({
  selector: 'app-flashcard-viewer',
  templateUrl: './flashcard-viewer.component.html',
  styleUrls: ['./flashcard-viewer.component.css']
})
export class FlashcardViewerComponent implements OnInit {
  cards = []

  constructor(private storage: LocalStorageManager) { }

  public ngOnInit()
  {
		this.loadCards()
  }
  
  loadCards() {
		this.cards = this.storage.getCards()
  }

  clearCards() {
    this.storage.clearCards()
  }
}
