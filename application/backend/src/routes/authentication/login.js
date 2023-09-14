const authentication = require('../../authentication');
const User = require('../../database/models/User');

const register = async (req, res) => {
  let { email, password } = req.body;

  if (typeof email !== 'string' || typeof password !== 'string') {
    res.status(400).json({
      status: false,
      error: 'invalid body',
    });
    return;
  }

  email = email.trim();
  password = password.trim();

  try {
    const u = await User.findOne({
      where: {
        user_email: email,
      },
    });

    if (u === null) {
      res.json({
        status: false,
        error: 'user not found',
      });
      return;
    }

    if (!(await authentication.verifyPassword(u.user_password, password))) {
      res.json({
        status: false,
        error: 'incorrect password',
      });
      return;
    }

    res.json({
      status: true,
      body: {
        token: authentication.generateJwt(u),
        role: u.user_role,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      error: 'internal error',
    });
  }
};

module.exports = register;
