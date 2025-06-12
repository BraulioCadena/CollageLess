import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload',
  imports: [CommonModule],
 
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  selectedFile: File | null = null;
  uploadMessage = '';
 mostrarCarta = false;
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

uploadImage(): void {
  if (this.selectedFile) {
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    fetch('http://localhost:8080/api/photos/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(photo => {
      this.uploadMessage = '¡Foto subida con éxito!';
      this.selectedFile = null;

      // Aquí podrías emitir un evento o actualizar la galería directamente
    })
    .catch(error => {
      console.error('Error al subir imagen:', error);
      this.uploadMessage = 'Error al subir imagen';
    });
  }
}}