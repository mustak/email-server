import { Request, Response, NextFunction } from 'express';
// import { HttpError } from 'http-errors';

/**
 * Set custom headers
 *
 * @param {Request} req - express Request Object
 * @param {Response} res - express Response Object
 * @param {NextFunction} next - express Next object
 */
export const setHeaders = function setHeaders(req: Request, res: Response, next: NextFunction) {
  console.warn('controller running');
  // inRes.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
  res.setHeader('Vary', 'Origin');

  // inRes.header('Accept-CH', 'Viewport-Width, Width, Downlink');
  // inRes.header('Vary', 'Origin, Viewport-Width, Width, Downlink');

  next();
};

export const someValue = function someValue(req: Request, res: Response) {
  res.send('NOT IMPLEMENTED: Book create GET');
};
