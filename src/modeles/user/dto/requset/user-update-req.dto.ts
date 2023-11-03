import { PickType } from '@nestjs/swagger';

import { UserBaseReqDto } from './user-base-req.dto';

export class UserUpdateReqDto extends PickType(UserBaseReqDto, [
  'userName',
  'email',
]) {}
