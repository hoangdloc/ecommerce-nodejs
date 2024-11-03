import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';

const app = express();

// init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use();

// init db

// init routes
app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome to the API'
  });
});

// handling error

export default app;
