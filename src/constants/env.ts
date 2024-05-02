import { z } from 'zod';

export const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  PORT: z.coerce.number().positive().max(65536, `port should be >= 0 and < 65536`),
});

export const env = EnvSchema.partial().parse(process.env);
