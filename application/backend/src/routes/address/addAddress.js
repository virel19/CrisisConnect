const Address = require('../../database/models/Adress');

const getCounties = async (req, res) => {
  try {
    const { lat, lng } = req.body;

    console.log(lat, lng);

    const address = Address.build({
      lat,
      lon: lng,
    });

    const resAddress = await address.save();

    res.json({
      status: true,
      body: {
        id: resAddress.id,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      error: 'internal error',
    });
  }
};

module.exports = getCounties;
