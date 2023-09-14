const { Op } = require('sequelize');
const CovidEvent = require('../../database/models/CovidEvent');
const SecurityEvent = require('../../database/models/SecurityEvent');
const WeatherEvent = require('../../database/models/WeatherEvent');
const WildfireEvent = require('../../database/models/WildfireEvent');
const Event = require('../../database/models/Event');
const County = require('../../database/models/County');
const Address = require('../../database/models/Adress');

const ALL_TYPE = [
  CovidEvent.name,
  WeatherEvent.name,
  SecurityEvent.name,
  WildfireEvent.name,
];

const getEvents = async (req, res) => {
  const { search, location } = req.query;
  let { type } = req.query;
  const jsonSchema = {
    [Op.or]: [],
  };
  const requestMap = {
    [CovidEvent.name]: { [Op.eq]: CovidEvent.name },
    [WeatherEvent.name]: { [Op.eq]: WeatherEvent.name },
    [SecurityEvent.name]: { [Op.eq]: SecurityEvent.name },
    [WildfireEvent.name]: { [Op.eq]: WildfireEvent.name },
  };

  try {
    if (type) {
      type = type.split(',');
    } else {
      type = ALL_TYPE;
    }

    type.map((t) => jsonSchema[Op.or].push(requestMap[t]));

    const locationSchema = {
      where: {
        name: {
          [Op.substring]: `${search || ''}`,
        },
        type: {
          ...jsonSchema,
        },
        CountyId: {
          [Op.eq]: location,
        },
      },
      include: [County, Address],
    };

    const noLocationSchema = {
      where: {
        name: {
          [Op.substring]: `${search || ''}`,
        },
        type: {
          ...jsonSchema,
        },
      },
      include: [County, Address],
    };

    const events = await Event.findAll(location === '-1' || location === undefined || location === '' ? noLocationSchema : locationSchema);

    res.json({
      status: true,
      body: events.map((event) => ({
        id: event.id,
        name: event.name,
        county_name: event.County.name || undefined,
        type: event.type,
        county_lat: event.County.lat || undefined,
        county_lon: event.County.lon || undefined,
        lat: event.Address.lat,
        lon: event.Address.lon,
        createdAt: event.createdAt,
        updatedAt: event.updatedAt,
      })),
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      error: 'internal error',
    });
  }
};

module.exports = getEvents;
