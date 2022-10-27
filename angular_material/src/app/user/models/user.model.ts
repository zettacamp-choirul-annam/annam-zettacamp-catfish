import { Address } from "./address.model";

export interface User {
      id: string;
      name: string;
      age: string;
      gender: 'Female' | 'Male';
      email: string;
      position: 'Admin' | 'Participant' | 'Mentor';
      marital_status: 'Married' | 'Single';
      addresses: Address
}