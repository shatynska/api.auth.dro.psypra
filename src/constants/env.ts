import { z } from 'zod';

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().positive().max(65536, `options.port should be >= 0 and < 65536`).default(3000),
});

export const env = EnvSchema.parse(process.env);
