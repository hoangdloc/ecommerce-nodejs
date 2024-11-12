import compression from 'compression';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import '~/dbs/init.mongodb';

const app = express();

// init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init db

// init routes
app.get('/', (_req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: 'Welcome to the API'
  });
  next();
});

// handling error

export default app;
