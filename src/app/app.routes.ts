import { Routes } from '@angular/router';

/// Custom components
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AccessDeniedComponent } from './accessdenied/accessdenied.component';

// authorize component
import { AppAuthorize } from './app.authorize';

/// Routes
export const navRouterConfig: Routes = [
      { path: '', pathMatch: 'prefix', redirectTo: 'home', data: { name: "home"}, canActivate: [AppAuthorize]},
      { path: "home", component: HomeComponent, data: { name: "home"}, canActivate: [AppAuthorize] },
      { path: "contact", component: ContactComponent, data: { name: "contact"}, canActivate: [AppAuthorize] },
      { path: "gallery", component: GalleryComponent, data: { name: "gallery"}, canActivate: [AppAuthorize] },
      { path: "accessdenied", component: AccessDeniedComponent, data: { name: "accessdenied"} },
];

