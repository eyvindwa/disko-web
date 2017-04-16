import { Component, OnInit } from '@angular/core';
import {Upcoming, Past} from './live-items';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  upcoming = Upcoming;
  past = Past;

  constructor() { }

  ngOnInit() {
  }

}
