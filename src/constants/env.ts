import { z } from 'zod';

export const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  PORT: z.coerce.number().positive().max(65536, `port should be >= 0 and < 65536`),
  HOST: z.string(),
  LOG_LEVEL: z.enum(['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'silent']),
});

export const env = EnvSchema.partial().parse(process.env);
