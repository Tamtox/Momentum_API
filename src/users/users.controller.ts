import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  CreateUserBodyDto,
  ListUsersQueryDto,
  ResetUserPasswordBodyDto,
  UpdateUserBodyDto,
} from './components/users.types';

@Controller('users')
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Get()
  listUsers(@Query() query: ListUsersQueryDto) {
    const users = this._usersService.listUsers(query);
    return users;
  }

  @Get(':id')
  getUser(@Query('id') id: string) {
    const users = this._usersService.listUsers({ id });
    return users;
  }

  @Get(':id/reset-password')
  resetUserPassword(@Body() body: ResetUserPasswordBodyDto) {
    const users = this._usersService.listUsers(body);
    return users;
  }

  @Post()
  createUser(@Body() body: CreateUserBodyDto) {
    return 'Create a new user';
  }

  @Patch()
  updateUser(@Body() body: UpdateUserBodyDto) {
    return 'Update a user';
  }

  @Post()
  signIn(@Body() body: CreateUserBodyDto) {
    return 'Sign in';
  }
}
