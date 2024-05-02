import { pino } from 'pino';
import { appConfig } from '../configs/app.config';

export const logger = pino({
  level: appConfig.logLevel,
});
