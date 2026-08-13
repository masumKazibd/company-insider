export interface WorkInfo {
  workModels?: (WorkModel | string)[] | null;
  officeHours?: OfficeHours | null;
  weekend?: (WeekendDay | string)[] | null;
  flexibleHours?: boolean | null;
  dressCode?: DressCode | string | null;
  probationMonths?: number | null;
  overtimePolicy?: OvertimePolicy | string | null;
}

export interface OfficeHours {
  start?: string | null;
  end?: string | null;
}

export type WorkModel =
  | 'On-site'
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