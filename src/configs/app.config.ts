import { z } from 'zod';
import { EnvSchema, env } from '../constants/env';

const appConfigSchema = z.object({
  nodeEnv: EnvSchema.shape.NODE_ENV,
  port: EnvSchema.shape.PORT,
});

export const appConfig: z.infer<typeof appConfigSchema> = {
  nodeEnv: env.NODE_ENV ?? 'development',
  port: env.PORT ?? 3000,
};
