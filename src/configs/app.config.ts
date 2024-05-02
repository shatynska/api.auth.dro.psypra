import { z } from 'zod';
import { EnvSchema, env } from '../constants/env';

const appConfigSchema = z.object({
  nodeEnv: EnvSchema.shape.NODE_ENV,
  port: EnvSchema.shape.PORT,
  host: EnvSchema.shape.HOST,
  logLevel: EnvSchema.shape.LOG_LEVEL,
});

export const appConfig: z.infer<typeof appConfigSchema> = {
  nodeEnv: env.NODE_ENV ?? 'development',
  port: env.PORT ?? 3000,
  host: env.HOST ?? 'localhost',
  logLevel: env.LOG_LEVEL ?? 'info',
};
