const service = require('../services/mailgun');

const sendMail = async (request, response) => {
  const mailInfo = request.body.data;
  await service.sendMail(mailInfo);
  response.status(200).send({success: true});
}

module.exports = {
  sendMail
}