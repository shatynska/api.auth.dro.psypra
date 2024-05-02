import { app } from './app';
import { appConfig } from './configs/app.config';
import { logger } from './utils/logger';

async function main() {
  const port = appConfig.port;

  app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
  });
}

main();
