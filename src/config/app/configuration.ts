import { registerAs } from '@nestjs/config';
import * as process from 'process';

export default registerAs('app', () => ({
  host: process.env.HOST,
  port: process.env.PORT,
}));
