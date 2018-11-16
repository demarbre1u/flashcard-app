import { Component, OnInit } from '@angular/core';
import { LocalStorageManager } from '../localstorage.manager'

import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class HomepageComponent implements OnInit {

  constructor(private storage: LocalStorageManager) { }

  ngOnInit() {
  }
  
  clearStorage() {
	  this.storage.clearCards()
  }
}
