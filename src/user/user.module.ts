import {forwardRef, Module} from '@nestjs/common';
import { UserService } from './user.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {AuthModule} from "../auth/auth.module";
import {AuthService} from "../auth/auth.service";
import {UserController} from "./user.controller";

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [UserService, AuthService],
  exports: [UserService]
})
export class UserModule {}
