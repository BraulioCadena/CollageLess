import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Photo } from '../models/photo.model';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  private readonly API = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllPhotos() {
    return this.http.get<Photo[]>(`${this.API}/photos`);
  }

  upload(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<Photo>(`${this.API}/photos/upload`, formData);
  }

  deletePhoto(id: number) {
    return this.http.delete(`${this.API}/photos/${id}`);
  }
}
