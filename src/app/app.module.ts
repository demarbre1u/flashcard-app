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
    path: 'flashcard', 
    component: FlashcardViewerComponent 
  },
  { 
    path: 'create', 
    component: FlashcardCreatorComponent 
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FlashcardComponent,
    FlashcardViewerComponent,
    HomepageComponent,
    FlashcardCreatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    SwiperModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [{
	  provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
