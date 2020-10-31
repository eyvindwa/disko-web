import { Component, OnInit, Inject, OnDestroy, AfterViewInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from "@angular/common";


import { News } from './news-items';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news = News;
  showAll = false;

  constructor(private router: Router, private renderer2: Renderer2, @Inject(DOCUMENT) private document) {
  }

  ngOnInit() {
        const s = this.renderer2.createElement('script');
        s.text = `!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");`;
        this.renderer2.appendChild(this.document.body, s);
  }

  toggleAll() {
    this.showAll = !this.showAll;
  }
}
