import { Component, OnInit } from '@angular/core';
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

  constructor(private storage: LocalStorageManager) {}

  ngOnInit() {}
  
  applyChanges() {
	this.storage.setTheme(this.theme)
	
	location.reload()
  }
  
  resetStorage() {
	this.storage.resetStorage()
	
	location.reload()
  }
}
