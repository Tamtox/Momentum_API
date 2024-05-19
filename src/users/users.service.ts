import { Injectable } from "@nestjs/common";
import { CreateUserBodyDto, ListUsersQueryDto, ResetUserPasswordBodyDto } from "./dto/users";
import crypto from "crypto";

@Injectable()
export class UsersService {
  createUser(body: CreateUserBodyDto) {
    console.log(body);
    const userId = crypto.randomUUID();
  }
  listUsers(queries: ListUsersQueryDto) {
    console.log(queries);
    return [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Alice Caeiro" },
      { id: 3, name: "Who Knows" },
    ];
  }
  resetUserPassword(body: ResetUserPasswordBodyDto) {
    console.log(body);
    return "Reset user password";
  }
}
