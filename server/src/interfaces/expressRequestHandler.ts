import { Request, Response } from 'express-serve-static-core';

export interface ExpressRequestHandler {
    requestHandler(request: Request, response: Response): void;
}
