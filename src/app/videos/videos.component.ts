import { Component, OnInit } from '@angular/core';
import {Videos} from './video-items';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos = Videos;

  constructor() { }

  ngOnInit() {
  }

}
