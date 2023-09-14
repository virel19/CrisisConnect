const County = require('../../database/models/County');

const getCounties = async (req, res) => {
  try {
    const counties = await County.findAll();

    res.json({
      status: true,
      body: counties.map((county) => ({
        id: county.id,
        name: county.name,
        lat: county.lat,
        lon: county.lon,
      })),
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      error: 'internal error',
    });
  }
};

module.exports = getCounties;
