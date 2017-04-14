import { Component, OnInit } from '@angular/core';
import {Discography} from './disco-items';

@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.css']
})
export class DiscoComponent implements OnInit {

  discography = Discography;

  constructor() { }

  ngOnInit() {
  }

}
