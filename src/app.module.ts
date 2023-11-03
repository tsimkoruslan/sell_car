import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppConfigModule } from './config/app/config.module';
import { TypeOrmConfiguration } from './config/postgres/type-orm-configuration';
import { CarModule } from './modules/car/car.module';
import { RoleModule } from './modules/role/role.module';
import { UserModule } from './modules/user/user.module';

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
