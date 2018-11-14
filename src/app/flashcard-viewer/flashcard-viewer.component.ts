import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard-viewer',
  templateUrl: './flashcard-viewer.component.html',
  styleUrls: ['./flashcard-viewer.component.css']
})
export class FlashcardViewerComponent implements OnInit {
  cards = []

  constructor() { }

  public ngOnInit()
  {
		this.loadCards()
  }
  
  loadCards() {
    let cardsString = window.localStorage.getItem('cards')
		if(cardsString === null)
		{
			this.cards.push(['学ぶ', 'to study'])
			this.cards.push(['悪夢', 'nightmare'])

			window.localStorage.setItem('cards', JSON.stringify(this.cards) )
		}
		else
		{
			this.cards = JSON.parse(cardsString)
		}
  }

}
