export interface Benefits {

  lunch: Lunch;

  festivalBonus: boolean;

  performanceBonus: boolean;

  providentFund: boolean;

  gratuity: boolean;

  medicalInsurance: boolean;

  transportFacility: boolean;

  internetAllowance: boolean;

  mobileAllowance: boolean;

  gym: boolean;

  parking: boolean;

  yearlyTour: boolean;

  trainingBudget: boolean;

  workFromHomeAllowance: boolean;
}

export interface Lunch {
  type: LunchType;
}

export type LunchType =
  | 'Free'
  | 'Subsidized'
  | 'Half Subsidized'
  | 'Food Court'
  | 'No Lunch'
  | 'Unknown';