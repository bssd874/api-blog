import { Request, Response, NextFunction } from 'express';

export const errorHandlerMid = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Internal Server Error' });
};

export default errorHandlerMid
