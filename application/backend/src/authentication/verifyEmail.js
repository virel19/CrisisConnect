const User = require('../database/models/User');

const verifyEmail = async (email) => {
  const user = await User.findOne({
    where: {
      user_email: email,
    },
  });

  return user?.user_email === email;
};

module.exports = { verifyEmail };
