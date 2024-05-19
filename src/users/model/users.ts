export class User {
  id: string;
  username: string;
  email: string;
  password: string;
  temporary_password: string | null;
  created_date: Date;
  updated_date: Date;
  created_by: string | null;
}
