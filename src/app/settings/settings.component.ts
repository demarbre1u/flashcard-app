import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { routerTransition } from '../router.animations';
import { LocalStorageManager } from '../localstorage.manager';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class SettingsComponent implements OnInit {
  theme: string = this.storage.getTheme()
  @Output() eventThemeChange = new EventEmitter<string>()
  themeList = []
  constructor(private storage: LocalStorageManager) {}

  ngOnInit() {
	  this.themeList = require('../../assets/themes.json').themes
  }
  
  applyChanges() {
	this.storage.setTheme(this.theme)
	
	this.eventThemeChange.emit('themeChange');
  }
  
  resetStorage() {
	this.storage.resetStorage()
	
	location.reload()
  }
}
