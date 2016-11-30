import express from 'express';
import path from 'path';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './server/config';

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

const { url, user, pass } = config.db;
mongoose.connect(url, { user, pass });

app.listen(3000, () => console.log('Server running'));
