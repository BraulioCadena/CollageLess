import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // 👈 necesario

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent }
    ]),
    provideHttpClient() // 👈 esto soluciona el error de inyección
  ]
});
