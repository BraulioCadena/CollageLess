import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export interface Photo {
  id: number;
  filename: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class PhotoService {
  private readonly API = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Obtener todas las fotos desde el backend (Cloudinary)
  getAllPhotos() {
    return this.http.get<Photo[]>(this.API);
  }

  // Subir una nueva imagen a Cloudinary
  upload(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<Photo>(`${this.API}/upload`, formData);
  }

  // Eliminar una foto por ID
  deletePhoto(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }
}
