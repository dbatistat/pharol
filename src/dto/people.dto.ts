import { Addresses } from '../interfaces/addresses';

export class PeopleDto {
  id: string;
  rut: string;
  rutChilen: number;
  name: string;
  lastname: string;
  email: string;
  gender: 'F' | 'M';
  addresses: Addresses[];
}
