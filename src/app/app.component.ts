import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  title = 'product';

  constructor(config: NgbCarouselConfig) {
  config.interval = 10000;
  config.wrap = false;
  config.keyboard = false;
  config.pauseOnHover = false;
  
  }

}