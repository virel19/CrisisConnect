const fs = require('fs');
const County = require('../../src/database/models/County');
const sequelize = require('../../src/database/database');

const uploadCounty = async () => {
  const data = fs.readFileSync(`${__dirname}/data/county.json`);

  const obj = JSON.parse(data.toString());
  await County.drop();
  await County.sync({ alter: true });

  try {
    await County.bulkCreate(obj);
  } catch (err) {
    console.error(err);
  }
};

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  await uploadCounty();
};

main();
