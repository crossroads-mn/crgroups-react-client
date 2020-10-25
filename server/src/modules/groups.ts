import { ExpressRequestHandler } from '../interfaces/expressRequestHandler';
import Logger from '../logger';
import { getActiveGroups } from '../providers/groupsData';
import { ConfigProvider as Config } from '../config';

export class GroupsDataModule implements ExpressRequestHandler {
    constructor(private logger: Logger, private config: Config) {}

    requestHandler(
        request: import('express-serve-static-core').Request,
        response: import('express-serve-static-core').Response
      ): void {
        this.logger.debug('MODULE_GROUPS_DATA', 'handling group data request');

        getActiveGroups(this.config)
        .then(results => {
          response.status(200);
          response.send(results);
        })
        .catch(error => {
          response.status(500);
          response.send(error);
        })
    }
}
