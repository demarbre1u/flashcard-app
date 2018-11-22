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

	public ngOnInit() {
		this.loadTheme('red')
	}
	
	loadTheme(themeName: string) {
		let theme = require(`../assets/themes/${themeName}.json`)	
		
		// Background
		document.documentElement.style.setProperty('--main-bg', theme.mainBg)
		document.documentElement.style.setProperty('--main-bg-color', theme.mainBgColor)
		document.documentElement.style.setProperty('--second-bg-color', theme.secondBgColor)
		
		// Text
		document.documentElement.style.setProperty('--main-text-color', theme.mainTextColor)
		document.documentElement.style.setProperty('--second-text-color', theme.secondTextColor)
		
		// Border
		document.documentElement.style.setProperty('--border-color', theme.borderColor)
		
		// Input text
		document.documentElement.style.setProperty('--input-focus', theme.inputFocus)
		document.documentElement.style.setProperty('--placeholder-color', theme.placeholderColor)
		
		// Button
		document.documentElement.style.setProperty('--main-button-bg', theme.mainButtonBg)
		document.documentElement.style.setProperty('--main-button-text', theme.mainButtonText)
		
		// Flashcards
		document.documentElement.style.setProperty('--fc-color-1', theme.fcColor1)
		document.documentElement.style.setProperty('--fc-color-2', theme.fcColor2)
		document.documentElement.style.setProperty('--fc-color-3', theme.fcColor3)
		document.documentElement.style.setProperty('--fc-color-4', theme.fcColor4)
		document.documentElement.style.setProperty('--fc-color-5', theme.fcColor5)
		document.documentElement.style.setProperty('--fc-color-6', theme.fcColor6)
	}
	  
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
