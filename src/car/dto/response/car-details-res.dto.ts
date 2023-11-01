import { EProducer } from '../../enum/producar.enum';

export class CarDetailsResponseDto {
  id: string;
  year: number;
  price: number;
  model: string;
  producer: EProducer;
  createdAt: Date;
}
