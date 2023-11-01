import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserCreateRequestDto } from './dto/requset/user-create-req.dto';
import { UserUpdateReqDto } from './dto/requset/user-update-req.dto';
import { UserDetailsResponseDto } from './dto/response/user-details-res.dto';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Create new user' })
  @Post()
  async createUser(
    @Body() body: UserCreateRequestDto,
  ): Promise<UserDetailsResponseDto> {
    return await this.userService.createUser(body);
  }

  @ApiOperation({ summary: 'Update user' })
  @Patch(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() body: UserUpdateReqDto,
  ): Promise<UserDetailsResponseDto> {
    return await this.userService.updateUser(userId, body);
  }

  @ApiOperation({ summary: 'Get all users' })
  @Get()
  async getAllUsers(): Promise<UserDetailsResponseDto[]> {
    return await this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Get user by Id' })
  @Get(':userId')
  async getUserById(
    @Param('userId') userId: string,
  ): Promise<UserDetailsResponseDto> {
    return await this.userService.getUserById(userId);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete user by Id' })
  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string): Promise<void> {
    await this.userService.deleteUser(userId);
  }
}
