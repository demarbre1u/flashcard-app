import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard-creator',
  templateUrl: './flashcard-creator.component.html',
  styleUrls: ['./flashcard-creator.component.css']
})
export class FlashcardCreatorComponent implements OnInit {
  colors = [
    "#f39c12",
    "#c0392b",
    "#2980b9",
    "#27ae60",
    "#2c3e50",
    "#8e44ad"
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
