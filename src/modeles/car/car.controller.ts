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

import { CarService } from './car.service';
import { CarCreateRequestDto } from './dto/requset/car-create-req.dto';
import { CarUpdateReqDto } from './dto/requset/car-update-req.dto';
import { CarDetailsResponseDto } from './dto/response/car-details-res.dto';

@ApiTags('Cars')
@Controller('Cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @ApiOperation({ summary: 'Create new Car' })
  @Post()
  async createCar(
    @Body() body: CarCreateRequestDto,
  ): Promise<CarDetailsResponseDto> {
    return await this.carService.createCar(body);
  }
  C;

  @ApiOperation({ summary: 'Update Car' })
  @Patch(':carId')
  async updateUser(
    @Param('carId') carId: string,
    @Body() body: CarUpdateReqDto,
  ): Promise<CarDetailsResponseDto> {
    return await this.carService.updateCar(carId, body);
  }

  @ApiOperation({ summary: 'Get all Car' })
  @Get()
  async getAllCar(): Promise<CarDetailsResponseDto[]> {
    return await this.carService.getAllCars();
  }

  @ApiOperation({ summary: 'Get car by Id' })
  @Get(':carId')
  async getCarById(
    @Param('carId') carId: string,
  ): Promise<CarDetailsResponseDto> {
    return await this.carService.getCarById(carId);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete car by Id' })
  @Delete(':carId')
  async deleteCar(@Param('carId') carId: string): Promise<void> {
    await this.carService.deleteCar(carId);
  }
}
