import { Routes } from '@angular/router';

import { HomeLanding } from './home-landing/home-landing';

export const routes: Routes = [
  { path: '', component: HomeLanding },
  { path: '**', redirectTo: '' }
];
