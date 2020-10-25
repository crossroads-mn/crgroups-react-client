import { load } from 'cheerio';
import { readFileSync } from 'fs';
import { join } from 'path';
import { ExpressRequestHandler } from '../interfaces/expressRequestHandler';
import Logger from '../logger';
import { getActiveGroups } from '../providers/groupsData';
import { ConfigProvider as Config } from '../config';

const clientHtml = join(__dirname, './../public/index.html');

export class ClientModule implements ExpressRequestHandler {
  constructor(private logger: Logger, private config: Config) 
  {}

  async requestHandler(
    request: import('express-serve-static-core').Request,
    response: import('express-serve-static-core').Response
  ) {
        this.logger.debug('MODULE_CLIENT', 'handling group data request');

        const groupData = await getActiveGroups(this.config);

        const content = load(readFileSync(clientHtml));

        const script = content('#__CRSGC_SSR_DATA');
        script.empty();
        script.append(JSON.stringify(groupData));

        response.status(200);
        response.send(content.html());
    }
}
