export class SearchPeopleDto {
  rut: string;
  rutChilen: number;
  name: string;
  lastname: string;
  email: string;
  gender: 'F' | 'M';
  address: string;
}
