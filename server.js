import express from 'express';
import path from 'path';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import winston from 'winston';
import configLoader from './server/config-loader';

const app = express();

app.use(bodyParser.json());
app.use(morgan('common'));

// In development we setup webpack-dev-middleware, webpack-hot-middleware and hot reloading of
// server routes otherwise we tell express to serve static files from dist
if (process.env.NODE_ENV === 'development') {
  app.use(require('./server/middlewares/dev'));
} else {
  app.use(express.static(path.resolve(__dirname, 'dist')));
}

require('./server/middlewares/passport')(app);

// Include server routes as a middleware, requiring like this
// allows hot reloading when in development mode
app.use((req, res, next) => {
  require('./server/app')(req, res, next);
});

const config = configLoader();
const {url, user, pass} = config.db;
const server = {
  auto_reconnect: true,
  socketOptions: {keepAlive: 1, connectTimeoutMS: 30000},
};

const connectDb = () => mongoose.connect(url, {user, pass, server});
const db = mongoose.connection;

db.on('error', (err) => winston.info(`db connection triggered an error: ${err}`));
db.on('disconnected', () => connectDb());

connectDb();

let port = 3000;

if (process.env.PORT) {
  port = process.env.PORT;
}
app.listen(port, () => console.log(`Server running on port: ${port}`));
