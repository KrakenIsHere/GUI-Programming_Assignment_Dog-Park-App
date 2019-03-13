import nodemailer from 'nodemailer';
import xoauth2 from 'xoauth2';

var transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
      user: 'sender@mail.com',
      clientId: '296309377569-ouh2vpnr6m5u8h11gag6vv41qak4mt73.apps.googleusercontent.com',
      clientSecret: '0T5i1V8IKj7jDagOHTwfDXtr',
      refreshToken: '1/jp-bOzsrr4DEc-P-c_1UbpgUQJbCSqrZuJ9tDn_RE0M'
    })
  }
})

var mailOptions = {
  from: 'Kraken <sender@mail.com>',
  to: 'reciver@mail.com',
  subject: 'Dog play date request',
  text: ''
}

transporter.sendMail(mailOptions, function (err, res){
  if (err) {
    console.log('Error');
  }
  else {
    console.log('Mail Sent');
  }
})
