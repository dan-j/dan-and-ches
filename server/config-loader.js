let config;

if (process.env.PLATFORM_ENV === 'heroku') {
  const { DB_URL, DB_USER, DB_PASS, JWT_SECRET } = process.env;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_DEFAULTS_FROM } = process.env;
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
    email: {
      transportOptions: {
        host: SMTP_HOST,
        port: SMTP_PORT,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      },
      defaults: {
        from: SMTP_DEFAULTS_FROM,
      },
    },
  };
} else {
  config = require('../config');
}

export default () => config;
