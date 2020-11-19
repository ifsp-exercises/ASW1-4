import { createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('Database connection established.'))
  .catch((err) =>
    console.warn(`An error occurred while connection database: ${err}`),
  );
