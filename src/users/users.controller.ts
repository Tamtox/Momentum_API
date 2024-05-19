import { Body, Controller, Get, Patch, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import {
  CreateUserBodyDto,
  ListUsersQueryDto,
  ResetUserPasswordBodyDto,
  SignInBodyDto,
  SignUpBodyDto,
  UpdateUserBodyDto,
} from "./dto/users";

@Controller("users")
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Post("sign-in") // Sign In ----------------------------------------------------------------------------------------------------------------
  signIn(@Body() body: SignInBodyDto) {
    return "Sign in";
  }

  @Post("sign-up") // Sign Up ----------------------------------------------------------------------------------------------------------------
  signUp(@Body() body: SignUpBodyDto) {
    return "Sign in";
  }

  @Post() // Create User --------------------------------------------------------------------------------------------------------------------
  createUser(@Body() body: CreateUserBodyDto) {
    return "Create a new user";
  }

  @Patch(":id") // Update User ---------------------------------------------------------------------------------------------------------------
  updateUser(@Body() body: UpdateUserBodyDto) {
    return "Update a user";
  }

  @Get(":id/reset-password") // Reset User Password -----------------------------------------------------------------------------------------
  resetUserPassword(@Body() body: ResetUserPasswordBodyDto) {
    const users = this._usersService.resetUserPassword(body);
    return users;
  }
  @Get(":id") // Get User ------------------------------------------------------------------------------------------------------------------
  getUser(@Query("id") id: string) {
    const users = this._usersService.listUsers({ id });
    return users;
  }
  @Get() // List Users ---------------------------------------------------------------------------------------------------------------------
  listUsers(@Query() query: ListUsersQueryDto) {
    const users = this._usersService.listUsers(query);
    return users;
  }
}
