import 'dotenv/config';

import app from '~/app';
import configMongodb from '~/configs/config.mongodb';

const PORT = configMongodb.app.port || 3000;

const server = app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('App is closed');
  });
});
