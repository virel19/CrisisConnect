const validator = require('email-validator');
const User = require('../../database/models/User');
const authentication = require('../../authentication');
const { verifyEmail } = require('../../authentication/verifyEmail');

const register = async (req, res) => {
  let { email, username, password } = req.body;

  if (typeof email !== 'string' || typeof username !== 'string' || typeof password !== 'string') {
    res.status(400).json({
      status: false,
      error: 'invalid body',
    });
    return;
  }

  email = email.trim();
  username = username.trim();
  password = password.trim();

  if (!validator.validate(email)) {
    res.status(400).json({
      status: false,
      error: 'email not valid',
    });
    return;
  }

  if (username.length < 1) {
    res.status(400).json({
      status: false,
      error: 'email is empty',
    });
    return;
  }

  if (password.length < 6) {
    res.status(400).json({
      status: false,
      error: 'password is too short',
    });
    return;
  }

  if (await verifyEmail(email)) {
    res.status(400).json({
      status: false,
      error: 'email is already used',
    });
    return;
  }

  try {
    const user = User.build({
      user_name: username,
      user_email: email,
      user_role: 'user',
      user_password: await authentication.hashPassword(password),
    });
    await user.save();

    res.json({
      status: true,
      body: 'User created',
    });
    res.redirect('/login');
  } catch (err) {
    res.status(500).json({
      status: false,
      error: 'internal error',
    });
  }
};

module.exports = register;
