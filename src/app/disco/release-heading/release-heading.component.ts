import { Component, OnInit, Input } from '@angular/core';
import {DiscoItem} from '../disco-item';

@Component({
  selector: 'release-heading',
  templateUrl: './release-heading.component.html',
  styleUrls: ['./release-heading.component.css']
})
export class ReleaseHeadingComponent implements OnInit {

  @Input()
  release: DiscoItem

  constructor() { }

  ngOnInit() {
  }

}
