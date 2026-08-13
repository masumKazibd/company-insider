import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { CompanyDetails } from './features/company/company-details/company-details';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company/:id', component: CompanyDetails },
  { path: '**', redirectTo: '' }
];