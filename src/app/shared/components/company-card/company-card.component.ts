import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Company } from "../../../models/company.model";

 
@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.css',
})
export class CompanyCardComponent {
  company = input.required<Company>();
}
