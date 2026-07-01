import { Component, input } from '@angular/core';
import { Company } from '../../../models/company.model';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
    companies = input.required<Company[]>();
}
