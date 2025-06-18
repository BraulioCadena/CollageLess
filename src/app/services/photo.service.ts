import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({ providedIn: 'root' })
export class PhotoService {
  private readonly API = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllPhotos() {
    return this.http.get<any[]>(this.API);
  }
   upload(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.API}/upload`, formData);
  }

  deletePhoto(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }
}
