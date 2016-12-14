let config;

if (process.env.PLATFORM_ENV === 'heroku') {
  const { DB_URL, DB_USER, DB_PASS, JWT_SECRET } = process.env;
  config = {
    db: {
      url: DB_URL,
      user: DB_USER,
      pass: DB_PASS,
    },

    jwt: {
      secretOrKey: JWT_SECRET,
      issuer: 'danandches.com',
      expiresIn: '1d',
    },
  };
} else {
  config = require('../config');
}

export default () => config;
