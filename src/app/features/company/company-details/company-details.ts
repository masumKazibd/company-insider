import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../../services/company.service';
import { Company } from '../../../models/company.model';

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './company-details.html',
  styleUrl: './company-details.css',
})
export class CompanyDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private companyService = inject(CompanyService);

  company = signal<Company | null>(null);
  isLoading = signal<boolean>(true);
  notFound = signal<boolean>(false);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.fetchCompanyDetails(id);
      } else {
        this.isLoading.set(false);
        this.notFound.set(true);
      }
    });
  }

  fetchCompanyDetails(id: string): void {
    this.isLoading.set(true);
    this.notFound.set(false);

    this.companyService.getCompanyById(id).subscribe({
      next: (data) => {
        if (data) {
          this.company.set(data);
        } else {
          this.notFound.set(true);
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching company details', err);
        this.notFound.set(true);
        this.isLoading.set(false);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  // Returns array of key benefits for grid display
  getFormattedBenefits(): { label: string; icon: string; enabled: boolean | null | undefined }[] {
    const b = this.company()?.benefits;
    if (!b) return [];

    return [
      { label: 'Lunch Facility (' + (b.lunch?.type || 'N/A') + ')', icon: '🍲', enabled: !!b.lunch?.type && b.lunch?.type !== 'No Lunch' },
      { label: 'Festival Bonus', icon: '🎉', enabled: b.festivalBonus },
      { label: 'Performance Bonus', icon: '🏆', enabled: b.performanceBonus },
      { label: 'Provident Fund', icon: '🏦', enabled: b.providentFund },
      { label: 'Gratuity', icon: '💰', enabled: b.gratuity },
      { label: 'Medical Insurance', icon: '🏥', enabled: b.medicalInsurance },
      { label: 'Transport Facility', icon: '🚌', enabled: b.transportFacility },
      { label: 'Internet Allowance', icon: '📶', enabled: b.internetAllowance },
      { label: 'Mobile Allowance', icon: '📱', enabled: b.mobileAllowance },
      { label: 'Gym Facility', icon: '🏋️', enabled: b.gym },
      { label: 'Parking Facility', icon: '🅿️', enabled: b.parking },
      { label: 'Yearly Tour', icon: '✈️', enabled: b.yearlyTour },
      { label: 'Training Budget', icon: '📚', enabled: b.trainingBudget },
      { label: 'WFH Allowance', icon: '💻', enabled: b.workFromHomeAllowance }
    ];
  }
}
