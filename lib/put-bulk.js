const client = require('./client');

module.exports = ({ body, index }) => client.bulk({ index, body });
