import { Component, ViewChild } from '@angular/core';
import { GalleryComponent } from '../../components/gallery/gallery.component';
@Component({
  selector: 'app-home',
  imports: [GalleryComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    @ViewChild(GalleryComponent) galleryComponent!: GalleryComponent;

  refrescarGaleria(): void {
    this.galleryComponent.ngOnInit(); // Fuerza la recarga de fotos
  }

}
