import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport';
import { ExtractJwt } from 'passport-jwt';
import * as process from 'process';

import { AuthService } from './auth.service';

@Injectable()
export class BearerStrategy extends PassportStrategy(Strategy, 'bearer') {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY || 'SecretKey',
    });
  }

  async validate(token: string) {
    let user = null;
    console.log(user);
    try {
      const decodeToken: any = this.jwtService.decode(token);
      user = await this.authService.validateUser(decodeToken);
      console.log(user);
    } catch (e) {
      console.log(
        new Date().toISOString(),
        ' [JWT USER VERIFY ERROR] ',
        JSON.stringify(e),
        ' [TOKEN] ',
      );
      throw new UnauthorizedException();
    }
  }
}
