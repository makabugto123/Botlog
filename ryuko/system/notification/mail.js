const logger = require('../../catalogs/ryukoc.js');
const nodemailer = require('nodemailer');
const config = require('../../../ryuko.json');
const target = config.EMAIL;

module.exports = async (subject, message) => {

  if (!message) {
    return logger.err("please provide a notification message!")
  }

  var isSubject;
  if (typeof subject === 'string' || subject instanceof String) {
    isSubject = subject.toUpperCase();
  } else {
    isSubject = subject;

  }



    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
      secure: false, // use SSL
      auth: {
        user: 'danilomanto33@gmail.com',
        pass: "wigk sofs uytk sjeq"
      }
    });

    // Configure the mailoptions object
    const mailOptions = {
      from: 'danilomanto33@gmail.com',
      to: target,
      subject: `DANILO NOTIFICATION ( ${isSubject} )`,
      text: message
    };
    
    // Send the email
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        logger.err('something went wrong when sending notification.');
      } else {
        
      }
    });
}