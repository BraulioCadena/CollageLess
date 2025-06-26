import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeartsComponent } from './components/hearts/hearts.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HeartsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'collage-amor';
}
