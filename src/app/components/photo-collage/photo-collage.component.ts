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
  selectedFiles: File[] = [];
  uploadMessage = '';
  uploading = false;
  showCard = false;

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

  onFilesSelected(event: any): void {
    const files = Array.from(event.target.files) as File[];
    if (files && files.length > 0) {
      this.selectedFiles = files;
      this.uploadMessage = '';
    }
  }

  uploadImages(): void {
    if (!this.selectedFiles.length) return;

    this.uploading = true;
    this.uploadMessage = '';

    const uploadTasks = this.selectedFiles.map(file =>
      this.photoService.upload(file).toPromise()
    );

    Promise.all(uploadTasks)
      .then(() => {
        this.uploadMessage = '📸 ¡Todas las fotos fueron subidas con éxito!';
        this.selectedFiles = [];
        this.loadPhotos(); // recarga el collage
      })
      .catch((err) => {
        console.error('Error al subir una o más imágenes:', err);
        this.uploadMessage = '❌ Error al subir algunas imágenes.';
      })
      .finally(() => {
        this.uploading = false;
      });
  }

  toggleCard(): void {
    this.showCard = !this.showCard;
  }

  deletePhoto(id: number): void {
    this.photoService.deletePhoto(id).subscribe({
      next: () => this.photos = this.photos.filter(p => p.id !== id),
      error: (err) => console.error('Error al eliminar imagen:', err)
    });
  }
}
