// This file configures the development web server
// which supports hot reloading and synchronized testing.

// Require Browsersync along with webpack and middleware for it
import browserSync from 'browser-sync';
// Required for react-router browserHistory
// see https://github.com/BrowserSync/browser-sync/issues/204#issuecomment-102623643
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack-dev-config';
import express from 'express'
import path from 'path'

const bundler = webpack(config);

const port = 3500;

const app = new express()

app.use(historyApiFallback());

app.use(
  webpackDevMiddleware(bundler, {
        // Dev middleware can't access config, so we provide publicPath
        publicPath: config.output.publicPath,

        // These settings suppress noisy webpack output so only errors are displayed to the console.
        noInfo: false,
        quiet: false,
        stats: {
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        }
  }
)
)




app.use(webpackHotMiddleware(bundler))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});

// Run Browsersync and use middleware for Hot Module Replacement
// browserSync({
//   port: 8788,
//   ui: {
//     port: 8889
//   },
//   server: {
//     baseDir: 'src',

//     middleware: [
//       historyApiFallback(),

//       webpackDevMiddleware(bundler, {
//         // Dev middleware can't access config, so we provide publicPath
//         publicPath: config.output.publicPath,

//         // These settings suppress noisy webpack output so only errors are displayed to the console.
//         noInfo: false,
//         quiet: false,
//         stats: {
//           assets: false,
//           colors: true,
//           version: false,
//           hash: false,
//           timings: false,
//           chunks: false,
//           chunkModules: false
//         },

//         // for other settings see
//         // http://webpack.github.io/docs/webpack-dev-middleware.html
//       }),

//       // bundler should be the same as above
//       webpackHotMiddleware(bundler)
//     ]
//   },

//   // no need to watch '*.js' here, webpack will take care of it for us,
//   // including full page reloads if HMR won't work
//   files: [
//     'src/*.html'
//   ]
// });
