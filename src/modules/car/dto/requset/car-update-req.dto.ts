import { IsInt, Max, Min } from 'class-validator';

export class CarUpdateReqDto {
  @IsInt()
  @Min(1970)
  @Max(new Date().getFullYear())
  year?: number;

  @IsInt()
  price?: number;
}
