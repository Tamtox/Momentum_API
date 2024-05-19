import { Module } from "@nestjs/common";
import { EnvModule } from "./env/env.module";
import { UsersModule } from "./users/users.module";
import { AppController } from "./app.controller";

@Module({
  imports: [EnvModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
