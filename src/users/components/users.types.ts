import {
  createPasswordValidator,
  createStringValidator,
} from 'src/common/zod/zod_validators';
import { z } from 'zod';

export class ListUsersQueryDto {
  id: string;
  username: string;
  page: number;
  limit: number;
  created_date_start: string;
  created_date_end: string;
  updated_date_start: string;
  updated_date_end: string;
}

export const createUserBodySchema = z.object(
  {
    username: createStringValidator('Name', {
      minLength: 1,
      maxLength: 255,
    }).optional(),
    email: createStringValidator('Email', {
      minLength: 1,
      maxLength: 255,
    }).email('Invalid email format'),
    password: createPasswordValidator('Password'),
  },
  {
    invalid_type_error: 'Create User body should be an object',
    required_error: 'Create User body is required',
  },
);

export type CreateUserBodyDto = z.infer<typeof createUserBodySchema>;

export class UpdateUserBodyDto {
  id: string;
  username: string;
  email: string;
  password: string;
}

export class ResetUserPasswordBodyDto {
  email: string;
}
