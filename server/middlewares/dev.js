import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import chokidar from 'chokidar';
import winston from 'winston';
import devWebpackConfig from '../../webpack.dev.config';

const compiler = webpack(devWebpackConfig);

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: devWebpackConfig.output.publicPath,
  quiet: true,
});

const hotMiddleware = webpackHotMiddleware(compiler);

// Do "hot-reloading" of express stuff on the server
// Throw away cached modules and re-require next time
// Ensure there's no important state in there!
const watcher = chokidar.watch('./server');

const ignoreSubPackages = ['models'];

const ignoreRegex = ignoreSubPackages.join('|');

watcher.on('ready', () => {
  watcher.on('all', () => {
    winston.info('Clearing require cache for ./server');
    Object.keys(require.cache).forEach((id) => {
      const baseRegex = '[/\]server[/\]';

      const regex = ignoreSubPackages.isEmpty
        ? new RegExp(baseRegex)
        : new RegExp(`${baseRegex}(?!${ignoreRegex})`);

      if (regex.test(id)) delete require.cache[id];
    });
  });
});

winston.level = 'debug';

module.exports = [devMiddleware, hotMiddleware];
