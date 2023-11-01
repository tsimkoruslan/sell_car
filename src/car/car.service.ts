import { Injectable, UnprocessableEntityException } from '@nestjs/common';

import { CarEntity } from '../database/entities/car.entity';
import { CarRepository } from './car.repository';
import { CarCreateRequestDto } from './dto/requset/car-create-req.dto';
import { CarUpdateReqDto } from './dto/requset/car-update-req.dto';

@Injectable()
export class CarService {
  constructor(private readonly carRepository: CarRepository) {}

  public async createCar(dto: CarCreateRequestDto): Promise<CarEntity> {
    return await this.carRepository.create(dto);
  }

  public async getAllCars(): Promise<CarEntity[]> {
    return await this.carRepository.find();
  }

  public async getCarById(carId: string): Promise<CarEntity> {
    return await this.findCarByIdOrException(carId);
  }

  public async updateCar(
    carId: string,
    dto: CarUpdateReqDto,
  ): Promise<CarEntity> {
    const car = await this.findCarByIdOrException(carId);
    this.carRepository.merge(car, dto);
    return await this.carRepository.save(car);
  }
  public async deleteCar(carId: string): Promise<void> {
    const entity = await this.findCarByIdOrException(carId);
    await this.carRepository.remove(entity);
  }
  private async findCarByIdOrException(carId: string): Promise<CarEntity> {
    const car = await this.carRepository.findOneBy({ id: carId });
    if (!car) {
      throw new UnprocessableEntityException('Car entity not found');
    }
    return car;
  }
}
