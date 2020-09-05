import * as express from 'express';
import { ConfigProvider as Config } from './config';
// import { HealthModule } from '../modules/health/HealthModule';
import Logger from './logger';

export class AppProvider {
  constructor(private logger: Logger, private config: Config) {}

  initializeExpressApp(): express.Application {
    const app = express();

    // const healthModule = new HealthModule(this.logger, this.config);
    // const clientService = new ClientContentService(this.logger);

    // App routes
    // app.get('/health', healthModule.requestHandler.bind(healthModule));

    const staticOptions = {
      fallthrough: this.config.env == 'production'
    };
    app.use('/public', express.static('./dist/public', staticOptions));

    // app.use('*', seriesModule.requestHandler.bind(seriesModule));

    return app;
  }
}
