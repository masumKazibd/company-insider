import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CompanyGridComponent } from './company-grid.component';

describe('CompanyGridComponent', () => {
  let component: CompanyGridComponent;
  let fixture: ComponentFixture<CompanyGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyGridComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyGridComponent);
    fixture.componentRef.setInput('companies', []);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
