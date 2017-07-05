import { Component, OnInit, Inject, OnDestroy, AfterViewInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';


import { News } from './news-items';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy, AfterViewInit {
  news = News;
  showAll = false;
  sub: any;
  constructor(private router: Router, private renderer2: Renderer2, @Inject(DOCUMENT) private document) {
  }

  ngOnInit() {
        const s = this.renderer2.createElement('script');
        // s.type = `application/ld+json`;
        s.text = `!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");`;
        this.renderer2.appendChild(this.document.body, s);
  }

  toggleAll() {
    this.showAll = !this.showAll;
  }

  ngAfterViewInit() {
    // this.sub = this.router.events.subscribe(val => {
    //   if (val instanceof NavigationEnd) {
    //     (<any>window).twttr = (function (d, s, id) {
    //       let js: any;
    //       const fjs = d.getElementsByTagName(s)[0], t = (<any>window).twttr || {};
    //       if (d.getElementById(id)) {
    //         return t;
    //       }
    //       js = d.createElement(s);
    //       js.id = id;
    //       js.src = 'https://platform.twitter.com/widgets.js';
    //       fjs.parentNode.insertBefore(js, fjs);

    //       t._e = [];
    //       t.ready = function (f: any) {
    //         t._e.push(f);
    //       };

    //       return t;
    //     }(document, 'script', 'twitter-wjs'));

    //     if ((<any>window).twttr.ready()) {
    //       (<any>window).twttr.widgets.load();
    //     }
    //   }
    // });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
