export interface Metadata {

  verified: boolean;

  verifiedBy?: string;

  source: Source;

  confidence:
    | 'High'
    | 'Medium'
    | 'Low';

  lastUpdated: string;

  nextReviewDate?: string;

  version: string;

  notes?: string;
}

export interface Source {

  type:
    | 'Official Website'
    | 'Company HR'
    | 'Verified Employee'
    | 'Community'
    | 'LinkedIn'
    | 'Other';

  url?: string;
}