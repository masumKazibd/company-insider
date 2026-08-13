export interface Benefits {
  lunch?: Lunch | null;
  festivalBonus?: boolean | null;
  performanceBonus?: boolean | null;
  providentFund?: boolean | null;
  gratuity?: boolean | null;
  medicalInsurance?: boolean | null;
  transportFacility?: boolean | null;
  internetAllowance?: boolean | null;
  mobileAllowance?: boolean | null;
  gym?: boolean | null;
  parking?: boolean | null;
  yearlyTour?: boolean | null;
  trainingBudget?: boolean | null;
  workFromHomeAllowance?: boolean | null;
}

export interface Lunch {
  type?: LunchType | string | null;
}

export type LunchType =
  | 'Free'
  | 'Provided'
  | 'Subsidized'
  | 'Half Subsidized'
  | 'Food Court'
  | 'No Lunch'
  | 'Unknown';