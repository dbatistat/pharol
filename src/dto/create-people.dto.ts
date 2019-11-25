import { Addresses } from '../interfaces/addresses';

export class CreatePeopleDto {
  rut: string;
  rutChilen: number;
  name: string;
  lastname: string;
  email: string;
  gender: 'F' | 'M';
  addresses: Addresses[];
}
