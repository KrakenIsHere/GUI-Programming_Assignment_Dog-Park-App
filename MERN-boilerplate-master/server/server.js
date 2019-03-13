const express = require('express');
const fs = require('fs');
const historyApiFallback = require('connect-history-api-fallback');
const mongoose = require('mongoose');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../config/config');
const webpackConfig = require('../webpack.config');

const isDev = process.env.NODE_ENV !== 'production';
const port  = process.env.PORT || 8080;

const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

// Configuration
// ================================================================================================
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
      user: 'sarka1223@gmail.com',
      clientId: '296309377569-ouh2vpnr6m5u8h11gag6vv41qak4mt73.apps.googleusercontent.com',
      clientSecret: '0T5i1V8IKj7jDagOHTwfDXtr',
      refreshToken: '1/_Bfv76CQkgNKGqrqnw_5pU6XH6tls1i-3fjL5wcByi8'
    })
  }
})

var mailOptions = {
  from: 'Kraken <sarka1223@gmail.com>',
  to: 'sarka1223@gmail.com',
  subject: 'Dog play date request',
  text: 'success'
}

transporter.sendMail(mailOptions, function (err, res){
  if (err) {
    console.log('Error: Cant send mail\n Reason: ' + err);
  }
  else {
    console.log('Mail Sent');
  }
})


// Set up Mongoose
mongoose.connect(isDev ? config.db_dev : config.db);
mongoose.Promise = global.Promise;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
require('./routes')(app);

if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(historyApiFallback({
    verbose: false
  }));

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../client/public'),
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    res.end();
  });
}

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }

  console.info('>>> 🌎 Open http://0.0.0.0:%s/ in your browser.', port);
});

module.exports = app;
