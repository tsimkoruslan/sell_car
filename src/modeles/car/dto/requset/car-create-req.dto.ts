import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

import { EProducer } from '../../enum/producar.enum';

export class CarCreateRequestDto {
  @IsInt()
  @Min(1970)
  @Max(new Date().getFullYear())
  year: number;

  @IsInt()
  price: number;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  model: string;

  @IsEnum(EProducer)
  producer: EProducer;
}
