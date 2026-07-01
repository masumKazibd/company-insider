export interface CompanyInfo {
  name: string;
  shortName?: string;
  logo: string;
  website: string;
  careerSite?: string;

  description?: string;

  industry: string;

  foundedYear?: number;

  employeeSize?: string;

  basisMember?: boolean;

  headquarters: Headquarters;

  branches?: string[];
}

export interface Headquarters {
  city: string;
  country: string;
}