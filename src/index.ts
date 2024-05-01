import { app } from './app';
import { appConfig } from './configs/app.config';

async function main() {
  const port = appConfig.port;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

main();
