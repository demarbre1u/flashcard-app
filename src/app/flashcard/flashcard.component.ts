import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';
import $ from "../../../node_modules/jquery";

@Component({
	selector: 'app-flashcard',
	animations: [
		trigger('flipCard', [
			state('recto', style({
			    background: '#2c3e50',
				color: '#ecf0f1',
			})),
			
			state('verso', style({
			    background: '#ecf0f1',
				color: '#2c3e50'
			})),
			
			transition('recto => verso', animate('1s', keyframes([
				    style({
				    	background: '#2c3e50',
				        color: '#ecf0f1',
				    }),
				    style({
				    	background: '#2c3e50',
				        color: '#ecf0f1',
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
			)),
			
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
				    	background: '#2c3e50',
				        color: '#ecf0f1',
				    }),
				    style({
						background: '#2c3e50',
				        color: '#ecf0f1',
				        transform: 'rotate3d(0,1,0,0deg)'
				    }),
				    
			    ])
			)),
		]),
	],
	templateUrl: './flashcard.component.html',
	styleUrls: ['./flashcard.component.css']
})

export class FlashcardComponent implements OnInit {
	@Input() card: string;
	isRecto = true
	isFlipping = false

	constructor() { }
	
	ngOnInit() { }
	
	flipCard(event) {
		if(this.isFlipping)
			return
		
		this.isRecto = !this.isRecto	
		this.isFlipping = true
	    setTimeout(() => {
	    	this.isFlipping = false
	    }, 1000);
		
		let target = $(event.target || event.srcElement || event.currentTarget)
		let question = $(target).find('.question')
		let answer = $(target).find('.answer')
		
		if(!this.isRecto) {
			question.fadeToggle(500, () => {
				answer.fadeToggle(500)
			})	
		} else {
		    answer.fadeToggle(500, () => {
		    	question.fadeToggle(500)
			})	
	    }
	}
}
