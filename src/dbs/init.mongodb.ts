'use strict';

import mongoose from 'mongoose';
import configMongodb from '~/configs/config.mongodb';
import { countConnect } from '~/helpers/check.connect';

const connectionString = `mongodb://${configMongodb.db.host}:${configMongodb.db.port}/${configMongodb.db.name}`;

class Database {
  private static instance: Database;

  constructor() {
    this.connect();
  }

  connect() {
    // eslint-disable-next-line no-constant-condition
    if (true) {
      mongoose.set('debug', true);
      mongoose.set('debug', {
        color: true
      });
    }

    mongoose
      .connect(connectionString, {
        maxPoolSize: 50
      })
      .then(() => {
        countConnect();
        console.log('Connected MongoDB successfully');
      })
      .catch(() => console.error('Error connecting to MongoDB: '));
  }

  static getInsance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongoDB = Database.getInsance();

export default instanceMongoDB;
