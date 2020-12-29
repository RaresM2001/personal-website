const mailgunApiKey = process.env.MAILGUN_KEY;
const domain = process.env.MAILGUN_DOMAIN;

const mailgun = require('mailgun-js')({
   apiKey: mailgunApiKey,
   domain: domain
});

const sendMail = (data) => {
  mailgun.messages().send(data, (error, body) => {
     if (error) {
      return false;
    }
  });
}

module.exports = {
  sendMail
}