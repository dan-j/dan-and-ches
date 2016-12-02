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
    secretOrKey: 'mysecret',
  },
};
