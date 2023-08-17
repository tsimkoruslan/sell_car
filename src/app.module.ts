import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {TypeOrmConfiguration} from "./config/database/type-orm-configuration";
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
      TypeOrmModule.forRootAsync(TypeOrmConfiguration.config),
      UserModule,
      AuthModule],
})
export class AppModule {}
