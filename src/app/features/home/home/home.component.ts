import { Component, inject, signal } from '@angular/core';
import { CompanyService } from '../../../services/company.service';
import { Company } from '../../../models/company.model';
import { CompanyGridComponent } from "../company-grid/company-grid.component";

@Component({
  selector: 'app-home',
  imports: [CompanyGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  private companyService = inject(CompanyService);

  companies = signal<Company[]>([]);

  constructor() {

    this.companyService.getCompanies().subscribe(companies => {

      this.companies.set(companies);

    });

  }

}