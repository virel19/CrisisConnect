const WeatherEvent = require('../../../database/models/WeatherEvent');
const Event = require('../../../database/models/Event');

const addWeatherEvent = async (req, res) => {
  if (req.role !== 'admin') {
    res.status(403).json({
      status: false,
      error: 'You must be admin to add events',
    });
    return;
  }

  console.log(req.body);

  try {
    const genericEvent = Event.build({
      id: req.body.id,
      name: req.body.name,
      county_name: req.body.county_name,
      type: 'WeatherEvent',
      CountyId: req.body.CountyId,
      AddressId: req.body.AddressId,
    });

    const weatherEvent = WeatherEvent.build({
      id: req.body.id,
      temperature: req.body.temperature,
      wind_speed: req.body.wind_speed,
      precipitation: req.body.precipitation,
      uv_index: req.body.uv_index,
      name: req.body.name,
      county_name: req.body.county_name,
    });

    await genericEvent.save();
    await weatherEvent.save();

    res.json({
      status: true,
      message: 'Weather event added to database',
    });
    return;
  } catch (err) {
    res.status(500).json({
      status: false,
      error: 'internal error',
    });
  }
};

module.exports = addWeatherEvent;
