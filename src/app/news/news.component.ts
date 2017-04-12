import { Component, OnInit } from '@angular/core';
import {News} from './news-items';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news = News;
  showAll = false;
  
  constructor() {
  }

  ngOnInit() {
  }

  toggleAll() {
    this.showAll = !this.showAll;
  }

  ngAfterViewInit() {
    !function (d :any, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id; js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, "script", "twitter-wjs");
  }
 
}
