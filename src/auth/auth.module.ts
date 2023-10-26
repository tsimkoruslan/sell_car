import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'process';

import { User } from '../user/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BearerStrategy } from './bearer.strategy';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'bearer',
      property: 'user',
      session: false,
    }),
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: process.env.JWT_SECRET_KEY,
        signOptions: {
          expiresIn: process.env.JWT_TTL,
        },
        verifyOptions: {
          clockTolerance: 60,
          maxAge: process.env.JWT_TTL,
        },
      }),
    }),
  ],
  providers: [AuthService, BearerStrategy],
  exports: [PassportModule, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
