import { Component, OnInit } from '@angular/core';
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
export class GalleryComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Photo[]>('https://angularless.onrender.com/api/photos').subscribe({
      next: (data) => {
        this.photos = data; // 🔥 Cloudinary ya da la URL completa
      },
      error: (err) => {
        console.error('Error cargando fotos:', err);
      }
    });
  }
}
