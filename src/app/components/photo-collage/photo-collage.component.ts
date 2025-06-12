import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photo-collage',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './photo-collage.component.html',
  styleUrls: ['./photo-collage.component.scss']
})
export class PhotoCollageComponent implements OnInit {
  photos: any[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos() {
    this.photoService.getAllPhotos().subscribe((res) => {
      this.photos = res;
    });
  }

  deletePhoto(id: number) {
    this.photoService.deletePhoto(id).subscribe(() => {
      this.photos = this.photos.filter(p => p.id !== id);
    });
  }

  // 👇 Agrega esto si necesitas construir la URL de las fotos
  photoUrl(filename: string): string {
    return `http://localhost:8080/api/photos/view/${filename}`;
  }
}
