'use strict';

import mongoose from 'mongoose';
import os from 'os';
import process from 'process';

const _SECONDS = 5000;

// Count connection
export const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections: ${numConnection}`);
};

// check overload
export const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // Assume maximum number of connections based on number of cores
    const maxConnections = numCores * 5;

    console.log(`Active connections: ${numConnection}`);
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnections) {
      console.log('Connection overload detected!');
      // notify.send(...);
    }
  }, _SECONDS);
};
