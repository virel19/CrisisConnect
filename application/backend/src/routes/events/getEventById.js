const Event = require('../../database/models/Event');
const WeatherEvent = require('../../database/models/WeatherEvent');
const CovidEvent = require('../../database/models/CovidEvent');
const WildfireEvent = require('../../database/models/WildfireEvent');
const SecurityEvent = require('../../database/models/SecurityEvent');

const getWeather = async (id) => {
  const event = await WeatherEvent.findOne({
    where: { id },
  });

  return event;
};

const getCovid = async (id) => {
  const event = await CovidEvent.findOne({
    where: { id },
  });

  return event;
};

const getWildfire = async (id) => {
  const event = await WildfireEvent.findOne({
    where: { id },
  });

  return event;
};

const getSecurity = async (id) => {
  const event = await SecurityEvent.findOne({
    where: { id },
  });

  return event;
};

const requestMap = {
  WeatherEvent: getWeather,
  CovidEvent: getCovid,
  WildfireEvent: getWildfire,
  SecurityEvent: getSecurity,
};

const getEventById = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findOne({ where: { id } });

    if (!event) {
      res.status(404).json({
        status: false,
        error: 'Event not found',
      });
      return;
    }

    const eventSpecific = await requestMap[event.type](id);

    if (!eventSpecific) {
      res.status(404).json({
        status: false,
        error: 'Event not found',
      });
      return;
    }

    res.json({
      status: true,
      body: {
        ...eventSpecific.dataValues,
        type: event.type,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: false,
      error: 'internal error',
    });
  }
};

module.exports = getEventById;
