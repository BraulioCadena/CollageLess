import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  private API = 'http://localhost:8080/api/photos';

  constructor(private http: HttpClient) {}

  getAllPhotos() {
    return this.http.get<any[]>(this.API);
  }

  deletePhoto(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }
}
