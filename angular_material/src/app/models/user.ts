import { Company } from "./company";

export interface User {
      _id: string;
      email: string;
      civility: string;
      first_name: string;
      last_name: string;
      company: Company;
      user_status: 'pending' | 'active';
      count_document: number;
}