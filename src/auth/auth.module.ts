import {forwardRef, Module} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {PassportModule} from "@nestjs/passport";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../user/user.entity";
import {JwtModule} from "@nestjs/jwt";
import * as process from "process";
import {UserModule} from "../user/user.module";
import {BearerStrategy} from "./bearer.strategy";
import {UserService} from "../user/user.service";

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
              secret: process.env.JWT_SECRET_KEY|| 'SecretKey',
              signOptions: {
                expiresIn: process.env.JWT_TTL || '24h'
              },
              verifyOptions: {
                clockTolerance: 60,
                maxAge: process.env.JWT_TTL || '24h',
              }
            }),
          }),
    forwardRef(()=>UserModule),
  ],
  controllers: [AuthController],
  providers: [AuthService, BearerStrategy, UserService],
  exports: [PassportModule, AuthService]
})
export class AuthModule {}
