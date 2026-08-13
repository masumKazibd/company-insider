export interface Salary {
  paymentMethod?: PaymentMethod | string | null;
  salaryReview?: SalaryReview | string | boolean | null;
  salaryDate?: string | null;
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