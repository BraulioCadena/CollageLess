import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoService } from '../../services/photo.service';

interface Photo {
  id: number;
  filename: string;
  url: string;
}

@Component({
  selector: 'app-photo-collage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-collage.component.html',
  styleUrls: ['./photo-collage.component.scss']
})
export class PhotoCollageComponent implements OnInit {
  photos: Photo[] = [];
  selectedFile!: File;
  uploadMessage = '';
  mostrarCarta = false;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.photoService.getAllPhotos().subscribe((res) => {
      this.photos = res;
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
uploadImage(): void {
  if (this.selectedFile) {
    this.photoService.upload(this.selectedFile).subscribe((photo) => {
      this.photos.push(photo); // photo.url debe venir con la imagen de Cloudinary
      this.selectedFile = undefined!;
      this.uploadMessage = '📸 Foto subida con éxito';
    });
  }
}


  deletePhoto(id: number): void {
    this.photoService.deletePhoto(id).subscribe(() => {
      this.photos = this.photos.filter(p => p.id !== id);
    });
  }
}
