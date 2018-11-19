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
import { NotifierModule, NotifierOptions } from "angular-notifier";
import { CollectionListComponent } from './collection-list/collection-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 
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

const notifierDefaultOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'left',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    showDismissButton: false,
    stacking: 2
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    FlashcardComponent,
    FlashcardViewerComponent,
    HomepageComponent,
    FlashcardCreatorComponent,
    CollectionListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    SwiperModule,
    RouterModule.forRoot(
      appRoutes
    ), 
    NotifierModule.withConfig(notifierDefaultOptions), 
    FontAwesomeModule
  ],
  providers: [
    {
	    provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }, 
    LocalStorageManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
