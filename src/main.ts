import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";
import * as dotenv from 'dotenv';
import * as process from "process";

const environment = process.env.NODE_ENV ?? '';
dotenv.config({path:`environments/${environment}.env`});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('nest project')
      .setDescription('The cats API description')
      .setVersion('1.0')
      .addTag('nest')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
