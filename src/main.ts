import * as http from 'http';
import { ConfigProvider as Config } from './config';
import { AppProvider as App } from './app';
import Logger from './logger';
import e = require('express');

const logger = new Logger();
const config = new Config();
const appProvider = new App(logger, config);

console.log(`Process env APP_ENV: ${process.env.APP_ENV}`);
console.log(`Process env DEBUG: ${process.env.DEBUG}`);
console.log(`meta : ${config.get('meta')}`);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error: { code: string; syscall?: string }, app: e.Application): void {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const httpPort = app.get('port');
  const bind = typeof httpPort === 'string' ? 'Pipe ' + httpPort : 'Port ' + httpPort;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening(server: http.Server): void {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  logger.debug('SERVER', 'Listening on ' + bind);

  // Always log port listening on
  console.log(`Listening on ${bind}`);
}

function main(): void {
  const app = appProvider.initializeExpressApp();

  // Setup App
  const httpServer = http.createServer(app);

  // Register app listener events
  httpServer.on('error', (error: { code: string; syscall?: string }) => {
    onError(error, app);
  });

  httpServer.on('listening', () => {
    onListening(httpServer);
  });

  httpServer.listen(config.get('port'));
}

main();
