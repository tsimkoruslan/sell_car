import { Injectable } from '@nestjs/common';

import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  // public async createRole(dto: any): Promise<RoleEntity> {
  //   return await this.roleRepository.create(dto);
  // }

  // public async deleteCar(carId: string): Promise<void> {
  //   const entity = await this.findCarByIdOrException(carId);
  //   await this.carRepository.remove(entity);
  // }
  // private async findCarByIdOrException(carId: string): Promise<CarEntity> {
  //   const car = await this.carRepository.findOneBy({ id: carId });
  //   if (!car) {
  //     throw new UnprocessableEntityException('Car entity not found');
  //   }
  //   return car;
  // }
}
