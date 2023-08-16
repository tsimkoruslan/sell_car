import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import {UserService} from "./user/user.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import {TypeOrmConfiguration} from "./config/database/type-orm-configuration";
@Module({
  imports: [
      TypeOrmModule.forRootAsync(TypeOrmConfiguration.config),
      UserModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
