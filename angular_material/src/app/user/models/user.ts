import { Addresses } from "./address";

export interface User {
      id_number: string;
      name: string;
      age: string;
      gender: 'Female' | 'Male';
      email: string;
      position: 'Admin' | 'Participant' | 'Mentor';
      marital_status: 'Married' | 'Single';
      addresses: Addresses
}