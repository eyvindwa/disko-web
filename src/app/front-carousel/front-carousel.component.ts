import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-front-carousel',
  templateUrl: './front-carousel.component.html',
  styleUrls: ['./front-carousel.component.css']
})
export class FrontCarouselComponent implements OnInit {


  @Input()
  images: {
        url: string;
        caption: string;
    }[];

  constructor() { }

  ngOnInit() {
  }

}
