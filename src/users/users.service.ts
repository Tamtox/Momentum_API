import { Injectable } from '@nestjs/common';
import { CreateUserBodyDto, ListUsersQueryDto } from './components/users.types';
import crypto from 'crypto';

@Injectable()
export class UsersService {
  createUser(body: CreateUserBodyDto) {
    const userId = crypto.randomUUID();
  },
  listUsers(quries: ListUsersQueryDto) {
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Alice Caeiro' },
      { id: 3, name: 'Who Knows' },
    ];
  }
}
