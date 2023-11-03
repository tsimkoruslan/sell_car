import {
  BadRequestException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';

import { UserEntity } from '../../database/entities/user.entity';
import { UserCreateRequestDto } from './dto/requset/user-create-req.dto';
import { UserUpdateReqDto } from './dto/requset/user-update-req.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async createUser(dto: UserCreateRequestDto): Promise<UserEntity> {
    const findUser = await this.userRepository.findOneBy({ email: dto.email });
    if (findUser) {
      throw new BadRequestException('User already exist');
    }
    return await this.userRepository.create(dto);
  }

  public async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  public async getUserById(userId: string): Promise<UserEntity> {
    return await this.findUserByIdOrException(userId);
  }

  public async deleteUser(userId: string): Promise<void> {
    const entity = await this.findUserByIdOrException(userId);
    await this.userRepository.remove(entity);
  }

  public async updateUser(
    userId: string,
    dto: UserUpdateReqDto,
  ): Promise<UserEntity> {
    const user = await this.findUserByIdOrException(userId);
    this.userRepository.merge(user, dto);
    return await this.userRepository.save(user);
  }
  private async findUserByIdOrException(userId: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new UnprocessableEntityException('User entity not found');
    }
    return user;
  }
}
