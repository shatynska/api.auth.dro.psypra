import { z } from 'zod';
import { EnvSchema, env } from '../constants/env';

const AppConfigSchema = z.object({
  nodeEnv: EnvSchema.shape.NODE_ENV,
  port: EnvSchema.shape.PORT,
  host: EnvSchema.shape.HOST,
  logLevel: EnvSchema.shape.LOG_LEVEL,
});

type AppConfigType = z.infer<typeof AppConfigSchema>;

export const appConfig: AppConfigType = {
  nodeEnv: env.NODE_ENV ?? 'development',
  port: env.PORT ?? 3000,
  host: env.HOST ?? 'localhost',
  logLevel: env.LOG_LEVEL ?? 'info',
};
