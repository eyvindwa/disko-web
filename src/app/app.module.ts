import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { DiscoComponent } from './disco/disco.component';
import { LiveComponent } from './live/live.component';
import { ReleaseHeadingComponent } from './disco/release-heading/release-heading.component';
import { ReleaseCarouselComponent } from './disco/release-carousel/release-carousel.component';
import { ContactComponent } from './contact/contact.component';
import { FrontCarouselComponent } from './front-carousel/front-carousel.component';
import { VideosComponent } from './videos/videos.component';
import { SafePipe } from './safe.pipe';

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
        path: 'videos',
        component: VideosComponent
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
    ContactComponent,
    FrontCarouselComponent,
    VideosComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


