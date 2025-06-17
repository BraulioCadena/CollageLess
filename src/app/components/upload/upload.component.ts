import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  @Output() fotoSubida = new EventEmitter<void>(); // 👈 aquí debe ir

  selectedFile: File | null = null;
  uploadMessage: string = '';
  mostrarCarta = false;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  uploadImage(): void {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    fetch('https://angularless.onrender.com/api/photos/upload', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) throw new Error('Error en el servidor');
      return response.json();
    })
    .then(photo => {
      this.uploadMessage = '¡Foto subida con éxito!';
      this.selectedFile = null;
      this.fotoSubida.emit(); // 👈 emitimos el evento correctamente
    })
    .catch(error => {
      console.error('Error al subir imagen:', error);
      this.uploadMessage = 'Error al subir imagen 😥';
    });
  }
}
