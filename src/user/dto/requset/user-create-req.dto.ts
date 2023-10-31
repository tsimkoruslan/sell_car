import { PickType } from '@nestjs/swagger';

import { UserBaseReqDto } from './user-base-req.dto';

export class UserCreateRequestDto extends PickType(UserBaseReqDto, [
  'userName',
  'email',
  'password',
  'status',
]) {}
