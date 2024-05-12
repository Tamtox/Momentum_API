import { Module } from "@nestjs/common";
import { EnvModule } from "./env/env.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [EnvModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
