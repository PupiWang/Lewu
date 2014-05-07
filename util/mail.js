var nodemailer = require("nodemailer");

var from = 'wz@ov-orange.com';

// create reusable transport method (opens pool of SMTP connections)
exports.transport = nodemailer.createTransport("SMTP", {
    host:'smtp.ym.163.com',
    port:25,
    auth: {
        user: from,
        pass: '7758258'
    }
});

exports.from = from;