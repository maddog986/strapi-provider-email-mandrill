'use strict';

// https://github.com/nodemailer/nodemailer
const nodemailer = require('nodemailer');

// not using lodash, its unnecessary for one function.
// https://vanillajstoolkit.com/helpers/pick/
function pick(obj, props) {
  // Create new object
  var picked = {};

  // Loop through props and push to new object
  for (let prop of props) {
    picked[prop] = obj[prop];
  }

  // Return new object
  return picked;
}

const msgFields = [
  'from',
  'replyTo',
  'to',
  'cc',
  'bcc',
  'subject',
  'text',
  'html',
  'attachments'
]

module.exports = {
  provider: 'Mandrill',
  name: 'Mandrill',

  init(providerOptions, settings) {
    return {
      send: (options = {}) => {
        options.from = options.from || settings.defaultFrom
        options.replyTo = options.replyTo || settings.defaultReplyTo
        options.text = options.text || options.html
        options.html = options.html || options.text

        return nodemailer.createTransport({
          service: 'Mandrill',
          auth: {
            user: providerOptions.apiUsername,
            pass: providerOptions.apiKey
          },
          logger: false, // log to console
          debug: false // include SMTP traffic in the logs
        })
          .sendMail(pick(options, msgFields))
      }
    }
  }
}
