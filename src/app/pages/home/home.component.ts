import { Component } from '@angular/core';
import { PhotoCollageComponent } from '../../components/photo-collage/photo-collage.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PhotoCollageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
