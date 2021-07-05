const date = require('date-and-time');
const fsLOG = require('fs')


// first slot is unique identifier
// second slot is the action to mention
// third slot is if you want to send email

const send = async (key, action, email) => {

    // gets current day
    now = new Date()
    const dateNow = date.format(now, 'MM-DD-YYYY')
    const dateMoment = date.format(now, 'DD hh:mm');

    // sets up logger
    var logger = fsLOG.createWriteStream('./logs/' + dateNow + '-' + key + '.txt', {
        flags: 'a' // 'a' means appending (old data will be preserved)
    })

    date.format(now, 'hh:mm A [GMT]Z');

    // writes logger and console

    logger.write(dateMoment + ' ' + key + ' - ' + action + '\n')


    if (email == true) {


        const send = require('gmail-send')({
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
            to: process.env.EMAIL_USERNAME,
            subject: key + ' ' + action,
            text: '',
        });

        send({
            files: ['./logs/' + dateNow + '-' + key + '.txt'],
        }, function(err, res, full) {
            if (err) return console.log(dateMoment + ' ' + key + ' - ' + 'Error email not sent');
            console.log(dateMoment + ' ' + key + ' - ' + 'Email sent');
        });


    }



}



const sendExpress = async (req, res, next) => {

    // gets current day
    now = new Date()
    const dateNow = date.format(now, 'MM-DD-YYYY')
    const dateMoment = date.format(now, 'DD hh:mm');

    // sets up logger
    var logger = fsLOG.createWriteStream('./logs/' + dateNow + '.txt', {
        flags: 'a' // 'a' means appending (old data will be preserved)
    })

    date.format(now, 'hh:mm A [GMT]Z');

    // writes logger and console

    logger.write(dateMoment + ' - ' + 'used' + '\n')


    next();

}




exports.send = send;
exports.sendExpress = sendExpress