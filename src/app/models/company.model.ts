import { CompanyInfo } from './companyInfo.model';
import { Technology } from './technology.model';
import { WorkInfo } from './workInfo.model';
import { Benefits } from './benefits.model';
import { Salary } from './salary.model';
import { Career } from './career.model';
import { Contact } from './contact.model';
import { Ratings } from './ratings.model';
import { Metadata } from './metadata.model';

export interface Company {
  id: string;
  company: CompanyInfo;
  technology: Technology;
  work: WorkInfo;
  benefits: Benefits;
  salary: Salary;
  career: Career;
  contact: Contact;
  ratings: Ratings;
  metadata: Metadata;
}