import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontImages } from 'app/front-images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  images = FrontImages;

  @ViewChild('navbarToggler') navbarToggler: ElementRef;

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }
}
