import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
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
    this.http.get<Photo[]>(`${environment.apiUrl}/photos`).subscribe({
      next: (data) => {
        this.photos = data.map(photo => ({
          ...photo,
          url: `${environment.apiUrl}${photo.url}`
        }));
      },
      error: (err) => {
        console.error('Error cargando fotos:', err);
      }
    });
  }
}
