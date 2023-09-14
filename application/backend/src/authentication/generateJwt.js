const jwt = require('jsonwebtoken');

const DEFAULT_SECRET = 'S3CR3T';

const generateJwt = (user) => {
  const secret = process.env.SECRET || DEFAULT_SECRET;

  return (jwt.sign({
    username: user.user_name,
    role: user.user_role,
  }, secret, {
    subject: user.user_id.toString(),
    expiresIn: '1 days',
  }));
};

module.exports = generateJwt;
