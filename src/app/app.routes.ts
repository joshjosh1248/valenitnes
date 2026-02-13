import { Routes } from '@angular/router';
import { ValentineComponent } from './valentine/valentine';
import { LovePageComponent } from './love-page/love-page';

export const routes: Routes = [
  { path: '', component: ValentineComponent },
  { path: 'accepted', component: LovePageComponent }
];
