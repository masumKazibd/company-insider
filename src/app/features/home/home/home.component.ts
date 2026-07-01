import { Component, inject, signal } from '@angular/core';
import { CompanyService } from '../../../services/company.service';
import { Company } from '../../../models/company.model';
import { CompanyGridComponent } from "../company-grid/company-grid.component";  
import { FilterPanelComponent } from '../../../shared/components/filter-panel/filter-panel';
import { HeroComponent } from '../hero/hero.component';
import { SearchBarComponent } from '../../../shared/components/search-bar/search-bar.Component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    SearchBarComponent,
    FilterPanelComponent,
    CompanyGridComponent
  ],
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