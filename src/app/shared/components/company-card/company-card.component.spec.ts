import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CompanyCardComponent } from './company-card.component';
import { Company } from '../../../models/company.model';

describe('CompanyCardComponent', () => {
  let component: CompanyCardComponent;
  let fixture: ComponentFixture<CompanyCardComponent>;

  const mockCompany: Company = {
    id: 'test-co',
    company: {
      name: 'Test Co',
      logo: '/logo.png',
      website: 'https://test.co',
      industry: 'Software',
      headquarters: { city: 'Dhaka', country: 'Bangladesh' }
    },
    technology: {
      languages: ['TypeScript'],
      frameworks: ['Angular'],
      databases: ['PostgreSQL'],
      cloud: ['AWS'],
      devops: ['Docker'],
      tools: ['Git']
    },
    work: { workModels: ['Hybrid'] },
    benefits: {},
    salary: {},
    career: {},
    contact: { email: 'hr@test.co', phone: '123' },
    ratings: {},
    metadata: { verified: true, source: { type: 'Official Website' }, confidence: 'High', lastUpdated: '2026', version: '1' }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyCardComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyCardComponent);
    fixture.componentRef.setInput('company', mockCompany);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
