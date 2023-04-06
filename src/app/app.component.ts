import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-tailwind-ant';
  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
}
