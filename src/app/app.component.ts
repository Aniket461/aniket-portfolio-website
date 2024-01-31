import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aniket-portfolio-website';

  show: Boolean = false;

  menuClick() {
    this.show = !this.show;
  }
}
