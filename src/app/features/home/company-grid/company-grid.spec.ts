import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGrid } from './company-grid';

describe('CompanyGrid', () => {
  let component: CompanyGrid;
  let fixture: ComponentFixture<CompanyGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
