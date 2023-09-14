const SecurityEvent = require('../../../database/models/SecurityEvent');
const Event = require('../../../database/models/Event');

const addSecurityEvent = async (req, res) => {
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
      type: 'SecurityEvent',
      CountyId: req.body.CountyId,
      AddressId: req.body.AddressId,
    });

    console.log(req.body);

    const securityEvent = SecurityEvent.build({
      id: req.body.id,
      reported_incident: req.body.reported_incident,
      date: req.body.date,
      name: req.body.name,
      county_name: req.body.county_name,
    });

    await genericEvent.save();
    await securityEvent.save();

    res.json({
      status: true,
      message: 'Security event added to database',
    });
    return;
  } catch (err) {
    res.status(500).json({
      status: false,
      error: 'internal error',
    });
  }
};

module.exports = addSecurityEvent;
