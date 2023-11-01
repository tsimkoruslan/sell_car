import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CarModule } from './car/car.module';
import { AppConfigModule } from './config/app/config.module';
import { TypeOrmConfiguration } from './config/postgres/type-orm-configuration';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(TypeOrmConfiguration.config),
    UserModule,
    CarModule,
    AppConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
