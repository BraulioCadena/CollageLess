import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Photo } from '../../photo.model';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Photo[]>('http://localhost:8080/api/photos').subscribe({
      next: (photos) => {
        this.images = photos.map(photo => `http://localhost:8080${photo.url}`);
      },
      error: (err) => {
        console.error('Error al obtener imágenes:', err);
      }
    });
  }
}
