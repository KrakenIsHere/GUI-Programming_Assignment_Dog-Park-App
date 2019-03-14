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

//const nodemailer = require('nodemailer');

// Configuration
// ================================================================================================
/*
//Create transporter with authentication
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        clientId: '296309377569-ouh2vpnr6m5u8h11gag6vv41qak4mt73.apps.googleusercontent.com',
        clientSecret: '0T5i1V8IKj7jDagOHTwfDXtr'
    }
});

//Send mail
transporter.sendMail({
    from: 'sarka1223@gmail.com',
    to: 'kris9463@edu.sde.dk',
    subject: 'Message',
    text: 'I hope this message gets through!',
    auth: {
        user: 'sarka1223@gmail.com',
        refreshToken: '1/2ASAi8eOzOPrFH-jaefSa_-vGJwDqmXBDIl4ibhfItQ',
        accessToken: 'ya29.GlvMBlJ-ZgSVvuhXz-jr_UZVq5nZ-yZX41gNHDpPePzK6zR6QqDlZusqbbe-x3LU81K3_l6LcYbfOAxPKjtafo0TnheL2MMwDA4yN6ojKnjKhq4VLgj1nQrOiZT_',
        expires: 1484314697598
    }
});
*/
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
