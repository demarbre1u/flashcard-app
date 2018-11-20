import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { FlashcardViewerComponent } from './flashcard-viewer/flashcard-viewer.component';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FlashcardCreatorComponent } from './flashcard-creator/flashcard-creator.component';
import { LocalStorageManager } from './localstorage.manager';
import { CollectionListComponent } from './collection-list/collection-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { DeleteCollectionAlertComponent } from './delete-collection-alert/delete-collection-alert.component';
import { DeleteCardAlertComponent } from './delete-card-alert/delete-card-alert.component';

 
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

const appRoutes: Routes = [
  { 
    path: '', 
    component: HomepageComponent 
  },
  { 
    path: 'list', 
    component: CollectionListComponent 
  },
  { 
    path: 'cards/:id', 
    component: FlashcardViewerComponent 
  },
  { 
    path: 'create/:id', 
    component: FlashcardCreatorComponent 
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FlashcardComponent,
    FlashcardViewerComponent,
    HomepageComponent,
    FlashcardCreatorComponent,
    CollectionListComponent,
    AlertDialogComponent,
    DeleteCollectionAlertComponent,
    DeleteCardAlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    SwiperModule,
    RouterModule.forRoot(
      appRoutes
    ), 
    FontAwesomeModule, 
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    {
	    provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }, 
    LocalStorageManager
  ],
  entryComponents: [
    AlertDialogComponent, 
    DeleteCollectionAlertComponent, 
    DeleteCardAlertComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
