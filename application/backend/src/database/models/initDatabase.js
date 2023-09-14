const CovidEvent = require('./CovidEvent');
const Departement = require('./Department');
const SecurityEvent = require('./SecurityEvent');
const User = require('./User');
const WeatherEvent = require('./WeatherEvent');
const WildfireEvent = require('./WildfireEvent');
const Event = require('./Event');
const County = require('./County');
const Address = require('./Adress');

const initDatabase = async () => {
  await User.sync();
  await Address.sync();
  await County.sync();
  await WeatherEvent.sync();
  await SecurityEvent.sync();
  await CovidEvent.sync();
  await WildfireEvent.sync();
  await Departement.sync();
  await Event.sync();

  await User.hasOne(Departement);
  await County.hasOne(Event, {
    foreignKey: {
      allowNull: null,
    },
  });
  await Event.belongsTo(County);
  await Address.hasOne(Event, {
    foreignKey: {
      allowNull: null,
    },
  });
  await Event.belongsTo(Address);
};

module.exports = { initDatabase };
