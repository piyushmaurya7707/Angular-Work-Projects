import { Routes } from '@angular/router';
import { HomePage } from './Components/home-page/home-page';   // ← adjust the path if your folder name is different

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];