import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Comment } from '@angular/compiler';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeartsComponent } from './components/hearts/hearts.component';
import { PhotoCollageComponent } from './components/photo-collage/photo-collage.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, HeartsComponent, PhotoCollageComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'collage-amor';
}
