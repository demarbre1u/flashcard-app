import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageManager } from './localstorage.manager';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'MyFlashcardApp'
	faCog = faCog
	
	constructor(private storage: LocalStorageManager, private router: Router) {}

	public ngOnInit() { }
	  
	resetStorage() {
		this.storage.resetStorage()
		  
		this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};

		let currentUrl = '?';

		this.router.navigateByUrl(currentUrl).then(() => {
			this.router.navigated = false;
			this.router.navigate([this.router.url]);
		});
	}
}
