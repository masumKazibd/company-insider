export interface WorkInfo {
  workModels: WorkModel[];

  officeHours: OfficeHours;

  weekend: WeekendDay[];

  flexibleHours: boolean;

  dressCode: DressCode;

  probationMonths: number;

  overtimePolicy: OvertimePolicy;
}

export interface OfficeHours {
  start: string;
  end: string;
}

export type WorkModel =
  | 'Onsite'
  | 'Hybrid'
  | 'Remote';

export type WeekendDay =
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export type DressCode =
  | 'Casual'
  | 'Business Casual'
  | 'Formal'
  | 'Uniform';

export type OvertimePolicy =
  | 'Paid'
  | 'Compensatory Leave'
  | 'Not Paid'
  | 'Not Allowed'
  | 'Unknown';