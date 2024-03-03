import { Component, OnInit } from '@angular/core';
import {Official, Demos, Compilations} from './disco-items';

@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.css']
})
export class DiscoComponent implements OnInit {

  official = Official;
  demos = Demos;
  compilations = Compilations;
  completeDisco = this.official.concat(this.compilations).concat(this.demos);

  constructor() { }

  ngOnInit() {
  }

}
