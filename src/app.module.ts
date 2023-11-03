import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppConfigModule } from './config/app/config.module';
import { TypeOrmConfiguration } from './config/postgres/type-orm-configuration';
import { CarModule } from './modeles/car/car.module';
import { RoleModule } from './modeles/role/role.module';
import { UserModule } from './modeles/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(TypeOrmConfiguration.config),
    UserModule,
    CarModule,
    AppConfigModule,
    RoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
