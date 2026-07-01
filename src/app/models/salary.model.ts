export interface Salary {

  paymentMethod: PaymentMethod;

  salaryReview: SalaryReview;

  salaryDate: string;
}

export type PaymentMethod =
  | 'Bank'
  | 'Cash'
  | 'Mobile Banking';

export type SalaryReview =
  | 'Monthly'
  | 'Quarterly'
  | 'Half-Yearly'
  | 'Yearly';