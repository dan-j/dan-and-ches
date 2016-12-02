let config;
console.log(`loading config`);
console.log(`is platform set? ${process.env.PLATFORM_ENV ? 'yes' : 'no'}`);
console.log(`value of platform is: ${process.env.PLATFORM_ENV}`);
if (process.env.PLATFORM_ENV === 'heroku') {
  console.log('loading heroku config');
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
  console.log('loading non-heroku config');
  config = require('./config');
}

export default () => config;
