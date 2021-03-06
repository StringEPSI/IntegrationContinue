'use strict';
let Winston = require('winston');

let winston = new Winston.Logger({
    transports: [
        new Winston.transports.Console({
            colorize: true,
            timestamp: true
        })
    ],
    timestamp: true,
    level: 5
});

module.exports = winston;