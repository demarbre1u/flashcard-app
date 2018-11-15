import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';

@Component({
	selector: 'app-flashcard',
	animations: [
		trigger('flipCard', [
			state('recto', style({
			    background: '{{ color }}',
				color: '#ecf0f1',
			}), {params: {color: 0}}),
			
			state('verso', style({
			    background: '#ecf0f1',
				color: '#2c3e50'
			})),
			
			transition('recto => verso', animate('1s', keyframes([
				    style({
				    	background: '{{ color }}',
				        color: 'white',
				    }),
				    style({
				    	background: '{{ color }}',
				        color: 'white',
				        transform: 'rotate3d(0,1,0,90deg)',
				    }),
				    style({
				    	background: '#ecf0f1',
						color: '#2c3e50'
				    }),
				    style({
						background: '#ecf0f1',
				        color: '#2c3e50',
				        transform: 'rotate3d(0,1,0,0deg)'
				    }),
				    
			    ])
			), {params: {color: 0}}),
			
			transition('verso => recto', animate('1s', keyframes([
				    style({
				    	background: '#ecf0f1',
				        color: '#2c3e50',
				    }),
				    style({
				    	background: '#ecf0f1',
				        color: '#2c3e50',
				        transform: 'rotate3d(0,1,0,90deg)',
				    }),
				    style({
				    	background: '{{ color }}',
				        color: 'white',
				    }),
				    style({
						background: '{{ color }}',
				        color: 'white',
				        transform: 'rotate3d(0,1,0,0deg)'
				    }),
				    
			    ])
			), {params: {color: 0}}),
		]),
	],
	templateUrl: './flashcard.component.html',
	styleUrls: ['./flashcard.component.css']
})

export class FlashcardComponent implements OnInit {
	@Input() card;
	@ViewChild('question') question:ElementRef;
	@ViewChild('answer') answer:ElementRef;
	isRecto = true
	isFlipping = false
	@Input() isQuestionShowing: boolean

	constructor() { }
	
	ngOnInit() { 		
		this.isQuestionShowing = true
	}
	
	flipCard(event) {
		if(this.isFlipping)
			return
		
		this.isRecto = !this.isRecto	
		this.isFlipping = true
		
		setTimeout(() => {
			this.isQuestionShowing = !this.isQuestionShowing
			
			this.question.nativeElement.classList.toggle('hidden')
			this.answer.nativeElement.classList.toggle('hidden')
		}, 500)
		
	    setTimeout(() => {
	    	this.isFlipping = false
	    }, 1000);
		
	}
}
