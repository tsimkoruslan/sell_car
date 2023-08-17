import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import {UserService} from "./user/user.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import {TypeOrmConfiguration} from "./config/database/type-orm-configuration";
import { AuthModule } from './auth/auth.module';
import {AuthService} from "./auth/auth.service";
import {AuthController} from "./auth/auth.controller";
@Module({
  imports: [
      TypeOrmModule.forRootAsync(TypeOrmConfiguration.config),
      UserModule,
      AuthModule],
  controllers: [],
  providers: [AuthService],
})
export class AppModule {}
