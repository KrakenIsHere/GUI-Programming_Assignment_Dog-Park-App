const Nodemailer = require('nodemailer');


module.exports = (app) => {

  app.post('/api/mail/send', (req, res, next) => {

    //Create transporter with authentication
    let transporter = Nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            clientId: '296309377569-ouh2vpnr6m5u8h11gag6vv41qak4mt73.apps.googleusercontent.com',
            clientSecret: '0T5i1V8IKj7jDagOHTwfDXtr'
        }
    });

    const { body } = req;

    var { park } = body;
    var { sm } = body;
    var { rm } = body;
    var { text } = body;

  //Send mail
    transporter.sendMail( {
        from: 'sarka1223@gmail.com', //No-reply E-Mail
        to: rm,
        subject: 'ESS Doggo play date request at ' + park,
        text: 'From: ' + sm + '\n\n' + text,
        auth: {
            user: 'sarka1223@gmail.com',
            refreshToken: '1/2ASAi8eOzOPrFH-jaefSa_-vGJwDqmXBDIl4ibhfItQ',
            accessToken: 'ya29.GlvMBtd8n3gjw6iTsZMUfCHQ3jOXPcWgrwXC4Izn0vEgATYSrz8nBbWRIJmKkPNAX5Fq2UJ7mD8lO3OXbIBf6w3dymC3mrN0Wl7dZlMF40BP3ENN_FyqoWWNyCAd',
            expires: 1484314697598
        }
    });

    return res.send({
      success: true,
      message: ''
    });
  });
}
