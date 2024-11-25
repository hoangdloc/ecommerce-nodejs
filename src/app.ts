import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import '~/dbs/init.mongodb';
import router from './routes';

const app = express();

// init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init db

// init routes
app.use('/', router);

// handling error

export default app;
