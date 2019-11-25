import { Addresses } from '../interfaces/addresses';

export class SearchPeopleDto {
  rut: string;
  rutChilen: number;
  name: string;
  lastname: string;
  email: string;
  gender: 'F' | 'M';
  addresses: Addresses[];
}
