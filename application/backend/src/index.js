const express = require('express');
const cors = require('cors');
const sequelize = require('./database/database');
const routes = require('./routes');
const { initDatabase } = require('./database/models/initDatabase');

const main = async () => {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());
  app.use(cors());

  app.use('/auth', routes.authentication);
  app.use('/event', routes.events);
  app.use('/counties', routes.counties);
  app.use('/address', routes.address);

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await initDatabase();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  app.listen(port, () => {
    console.log(`listening at http://localhost:${port}.`);
  });
};

main();
