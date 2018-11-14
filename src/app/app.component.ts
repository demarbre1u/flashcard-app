import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'MyFlashcardApp'
	cards = []
	
  	public ngOnInit()
  	{
		this.loadCards()	   	
	}
   	
   	public loadCards() {
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
