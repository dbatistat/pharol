import { Addresses } from './addresses';

export interface People {
  rut: string;
  rutChilen: number;
  name: string;
  lastname: string;
  email: string;
  gender: 'F' | 'M';
  addresses: Addresses[];
}
