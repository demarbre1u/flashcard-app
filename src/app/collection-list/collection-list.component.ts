import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { LocalStorageManager } from '../localstorage.manager';
import { faPlus, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import {  Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DeleteCollectionAlertComponent } from '../delete-collection-alert/delete-collection-alert.component';
import { AddCollectionAlertComponent } from '../add-collection-alert/add-collection-alert.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css'],

  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class CollectionListComponent implements OnInit {
  faPlus = faPlus
  faEye = faEye
  faTrash = faTrash
  collections: any

  constructor(private storage: LocalStorageManager, private router: Router,  public dialog: MatDialog) { 
    this.collections = this.storage.getCollections()
  }

  ngOnInit() { }

  addCard(id: number) {
    this.router.navigate(['create', id])
  }

  seeCards(id: number) {
    this.router.navigate(['cards', id])
  }

  deleteCollection(id: number) {
    let dialogRef = this.dialog.open(DeleteCollectionAlertComponent, {
      width: '80vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.storage.deleteCollection(id)

        this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};

        let currentUrl = this.router.url + '?';

        this.router.navigateByUrl(currentUrl).then(() => {
            this.router.navigated = false;
            this.router.navigate([this.router.url]);
        });
      }
    });
  }

  addCollection() {
    let dialogRef = this.dialog.open(AddCollectionAlertComponent, {
      width: '80vh'
    })

    dialogRef.afterClosed().subscribe(result => {
	  if(!result)
	  	return;
	  	
      this.storage.addCollection(result)

      this.router.routeReuseStrategy.shouldReuseRoute = function(){return false}

      let currentUrl = this.router.url + '?'

      this.router.navigateByUrl(currentUrl).then(() => {
        this.router.navigated = false
        this.router.navigate([this.router.url])
      })
    })
    
  }
}
