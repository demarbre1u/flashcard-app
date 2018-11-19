import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { LocalStorageManager } from '../localstorage.manager';
import { faPlus, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import {  Router } from '@angular/router';

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

  constructor(private storage: LocalStorageManager, private router: Router) { 
    this.collections = this.storage.getCollections()
  }

  ngOnInit() { }

  addCard(id: number) {
    console.log(id)

    this.router.navigate(['create', id])
  }
}
