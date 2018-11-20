import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalStorageManager } from '../localstorage.manager';
import { SwiperComponent } from 'ngx-swiper-wrapper';
import { Router, ActivatedRoute } from '@angular/router';

import { routerTransition } from '../router.animations';
import { MatDialog } from '@angular/material';
import { DeleteCardAlertComponent } from '../delete-card-alert/delete-card-alert.component';

@Component({
  selector: 'app-flashcard-viewer',
  templateUrl: './flashcard-viewer.component.html',
  styleUrls: ['./flashcard-viewer.component.css'],
  
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class FlashcardViewerComponent implements OnInit {
  cards = []
  name: string
  currentId: string
  
  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;

  constructor(private route: ActivatedRoute, private storage: LocalStorageManager, private router: Router, public dialog: MatDialog) { }

  public ngOnInit()
  {
    this.route.params.subscribe((params) => {this.currentId = params['id']});

    this.loadCards()
    this.getName()
  }
  
  loadCards() {
		this.cards = this.storage.getCardsFromCollection(this.currentId)
  }

  getName() {
    this.name = this.storage.getCollectionName(this.currentId)
  }
  
  deleteCurrentCard() {
    let dialogRef = this.dialog.open(DeleteCardAlertComponent, {
      width: '80vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        let currentIndex = this.componentRef.directiveRef.getIndex()
	  
        this.storage.deleteCardFromCollection(this.currentId, currentIndex)

        this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};

        let currentUrl = this.router.url + '?';

        this.router.navigateByUrl(currentUrl).then(() => {
            this.router.navigated = false;
            this.router.navigate([this.router.url]);
        });
      }
    });
  }
}
