import * as express from 'express';
import { ConfigProvider as Config } from './config';
import { HealthModule } from './modules/health';
import Logger from './logger';

export class AppProvider {
  constructor(private logger: Logger, private config: Config) {}

  initializeExpressApp(): express.Application {
    const app = express();

    const health = new HealthModule(this.logger, this.config);
    // const clientService = new ClientContentService(this.logger);

    // App routes
    app.get('/health', health.requestHandler.bind(health));

    const staticOptions = {
      fallthrough: this.config.env == 'production'
    };
    app.use('/public', express.static('./dist/public', staticOptions));

    // app.use('*', seriesModule.requestHandler.bind(seriesModule));

    return app;
  }
}
