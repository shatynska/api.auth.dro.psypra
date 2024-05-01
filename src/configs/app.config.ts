import { env } from '../constants/env';

type AppConfigType = {
  nodeEnv: string;
  port: number;
};

export const appConfig: AppConfigType = {
  nodeEnv: env.NODE_ENV,
  port: env.PORT,
};
