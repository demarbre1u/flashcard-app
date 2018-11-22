import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { FlashcardViewerComponent } from './flashcard-viewer/flashcard-viewer.component';
import { Routes, RouterModule } from '@angular/router';
import { FlashcardCreatorComponent } from './flashcard-creator/flashcard-creator.component';
import { LocalStorageManager } from './localstorage.manager';
import { CollectionListComponent } from './collection-list/collection-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { DeleteCollectionAlertComponent } from './delete-collection-alert/delete-collection-alert.component';
import { DeleteCardAlertComponent } from './delete-card-alert/delete-card-alert.component';
import { AddCollectionAlertComponent } from './add-collection-alert/add-collection-alert.component';
import { SettingsComponent } from './settings/settings.component';

import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from '@angular/material/radio';
 
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

const appRoutes: Routes = [
  { 
    path: '', 
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
  { 
    path: 'settings', 
    component: SettingsComponent 
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FlashcardComponent,
    FlashcardViewerComponent,
    FlashcardCreatorComponent,
    CollectionListComponent,
    AlertDialogComponent,
    DeleteCollectionAlertComponent,
    DeleteCardAlertComponent,
    AddCollectionAlertComponent,
    SettingsComponent
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
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    
    FormsModule,
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
    AddCollectionAlertComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
