const CovidEvent = require('../../../database/models/CovidEvent');
const Event = require('../../../database/models/Event');

const addCovidEvent = async (req, res) => {
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
      type: 'CovidEvent',
      CountyId: req.body.CountyId,
      AddressId: req.body.AddressId,
    });

    const covidEvent = CovidEvent.build({
      id: req.body.id,
      shelter_in_place: req.body.shelter_in_place,
      covid_cases: req.body.covid_cases,
      covid_death: req.body.covid_death,
      date_time: req.body.date_time,
      name: req.body.name,
      county_name: req.body.county_name,
    });

    await genericEvent.save();
    await covidEvent.save();

    res.json({
      status: true,
      message: 'Covid event added to database',
    });
    return;
  } catch (err) {
    res.status(500).json({
      status: false,
      error: 'internal error',
    });
  }
};
module.exports = addCovidEvent;
