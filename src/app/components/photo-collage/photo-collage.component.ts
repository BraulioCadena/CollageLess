import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-photo-collage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './photo-collage.component.html',
  styleUrls: ['./photo-collage.component.scss']
})
export class PhotoCollageComponent implements OnInit {
  photos: Photo[] = [];
  selectedFile!: File;
  uploadMessage = '';
  showCard = false; // <-- ESTA LÍNEA FALTABA

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.photoService.getAllPhotos().subscribe({
      next: (res) => this.photos = res,
      error: (err) => console.error('Error al cargar fotos:', err)
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.uploadMessage = '';
    }
  }

  uploadImage(): void {
    if (this.selectedFile) {
      this.photoService.upload(this.selectedFile).subscribe({
        next: (photo) => {
          this.uploadMessage = '📸 ¡Foto subida con éxito!';
          this.selectedFile = undefined!;
          this.loadPhotos(); // Refrescar lista
        },
        error: (err) => {
          this.uploadMessage = '❌ Error al subir la imagen';
          console.error(err);
        }
      });
    }
  }

  toggleCard(): void { // <-- ESTE MÉTODO FALTABA
    this.showCard = !this.showCard;
  }

  deletePhoto(id: number): void {
    this.photoService.deletePhoto(id).subscribe({
      next: () => this.photos = this.photos.filter(p => p.id !== id),
      error: (err) => console.error('Error al eliminar imagen:', err)
    });
  }
}
