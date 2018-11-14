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
	cardIndex = 0
	
  	public ngOnInit()
  	{
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

    	$(document).ready(() => {

			/*
			$('#question').html(this.cards[0][0])
			$('#answer').html(this.cards[0][1])

			$('#flashcard').on('click', manageText)
			  
			$('#left-btn').on('click', flipLeft.bind(this))
			$('#right-btn').on('click', flipRight.bind(this))
			*/

		})
		
		function flipLeft() {
			if(this.cardIndex === 0)
				return

			this.cardIndex--

			let fcard = $('#flashcard')
			let question = $('#question')
			let answer = $('#answer')
			let leftBtn = $('#left-btn')
			leftBtn.unbind('click')

			fcard.css( {opacity: 1.0, visibility: "visible"} ).animate( {opacity: 0} , 500, 'swing', () => {
				question.html( this.cards[this.cardIndex][0] )
				answer.html( this.cards[this.cardIndex][1] )
			})

			fcard.css( {opacity: 1.0, visibility: "visible"} ).animate( {opacity: 1.0} , 500)

			let callback = flipLeft.bind(this)
			setTimeout(function(){
				leftBtn.on('click', callback)
			}, 400);
		}

		function flipRight() {
			if(this.cardIndex === this.cards.length - 1)
				return

			this.cardIndex++

			let fcard = $('#flashcard')
			let question = $('#question')
			let answer = $('#answer')
			let rightBtn = $('#right-btn')
			rightBtn.unbind('click')

			fcard.css( {opacity: 1.0, visibility: "visible"} ).animate( {opacity: 0} , 400, 'swing', () => {
				question.html( this.cards[this.cardIndex][0] )
				answer.html( this.cards[this.cardIndex][1] )
			})

			fcard.css( {opacity: 1.0, visibility: "visible"} ).animate( {opacity: 1.0} , 400)

			let callback = flipRight.bind(this)
			setTimeout(function(){
				rightBtn.on('click', callback)
			}, 400);
		}

		function flipCard() {
			let fc = $('#flashcard')
		  
			if(fc.hasClass('flip-card-1') || fc.hasClass('flip-card-2'))
			{
				fc.toggleClass('flip-card-1')
				  fc.toggleClass('flip-card-2')	
			}
			else
				  fc.addClass('flip-card-1')	
		  }
	
		  function manageText() {
			let fc = $('#flashcard')
			let question = $('#question')
			let answer = $('#answer')
		
			fc.unbind('click')
			
			flipCard()
		
			if(fc.hasClass('flip-card-1')) {
				question.fadeToggle( () => {
					answer.fadeToggle()
				  })	
			} else {
				  answer.fadeToggle( () => {
					  question.fadeToggle()
				  })	
			   }
		
			setTimeout(function(){
				fc.on('click', manageText)
			}, 800);
		  }
	}
}
