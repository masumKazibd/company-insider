import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private http = inject(HttpClient);

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('assets/data/companies.json');
  }

}