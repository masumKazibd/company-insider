import { Component, inject, input, OnInit } from '@angular/core';
import { CompanyCardComponent } from '../../../shared/components/company-card/company-card.component'; 
import { Company } from '../../../models/company.model';

@Component({
  selector: 'app-company-grid',
  standalone: true,
  imports: [CompanyCardComponent],
  templateUrl: './company-grid.component.html'
})
export class CompanyGridComponent {

  companies = input.required<Company[]>();

}