import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private http = inject(HttpClient);

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('/data/companies.json');
  }

  getCompanyById(id: string): Observable<Company | undefined> {
    return this.getCompanies().pipe(
      map(companies => companies.find(c => c.id === id))
    );
  }

}