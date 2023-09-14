const WildfireEvent = require('../../../database/models/WildfireEvent');
const Event = require('../../../database/models/Event');

const addWildfireEvent = async (req, res) => {
  if (req.role !== 'admin') {
    res.status(403).json({
      status: false,
      error: 'You must be admin to add events',
    });
    return;
  }

  try {
    const genericEvent = Event.build({
      id: req.body.id,
      name: req.body.name,
      county_name: req.body.county_name,
      type: 'WildfireEvent',
      CountyId: req.body.CountyId,
      AddressId: req.body.AddressId,
    });

    const wildfireEvent = WildfireEvent.build({
      id: req.body.id,
      evac_level: req.body.evac_level,
      wildfire_count: req.body.wildfire_count,
      name: req.body.name,
      county_name: req.body.county_name,
    });

    await genericEvent.save();
    await wildfireEvent.save();

    res.json({
      status: true,
      message: 'Wildfire event added to database',
    });
    return;
  } catch (err) {
    res.status(500).json({
      status: false,
      error: 'internal error',
    });
  }
};

module.exports = addWildfireEvent;
