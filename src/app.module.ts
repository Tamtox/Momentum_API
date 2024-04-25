import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvModule } from './env/env.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [EnvModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
