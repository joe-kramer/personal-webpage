import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebpageComponent } from './webpage/webpage.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WebpageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
