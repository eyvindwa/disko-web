import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { DiscoComponent } from './disco/disco.component';
import { LiveComponent } from './live/live.component';
import { ReleaseHeadingComponent } from './disco/release-heading/release-heading.component';
import { ReleaseCarouselComponent } from './disco/release-carousel/release-carousel.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'disco',
        component: DiscoComponent
      },
      {
        path: 'live',
        component: LiveComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full'
      }
    ];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    AboutComponent,
    DiscoComponent,
    LiveComponent,
    ReleaseHeadingComponent,
    ReleaseCarouselComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


