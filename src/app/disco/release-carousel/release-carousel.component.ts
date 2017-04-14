import { Component, OnInit, Input } from '@angular/core';
import { DiscoItem } from "app/disco/disco-item";

@Component({
  selector: 'release-carousel',
  templateUrl: './release-carousel.component.html',
  styleUrls: ['./release-carousel.component.css']
})
export class ReleaseCarouselComponent implements OnInit {

  @Input()
  release: DiscoItem

  constructor() { }

  ngOnInit() {
  }

}
