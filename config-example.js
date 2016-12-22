let mongoConfig;

if (process.env.NODE_ENV === 'production') {
  mongoConfig = {
    url: 'host:port/dbname',
    user: 'user',
    pass: 'changeme',
  };
} else {
  mongoConfig = {
    url: 'localhost/dbname',
  };
}


exports.default = {
  db: mongoConfig,

  jwt: {
    secretOrKey: '',
    issuer: '',
    expiresIn: '1d',
  },

  email: {
    transportOptions: {
      host: '',
      port: 587,
      auth: {
        user: 'me@example.com',
        pass: 'changeme',
      },
    },
    defaults: {
      from: 'me@example.com',
    },
  },
};
