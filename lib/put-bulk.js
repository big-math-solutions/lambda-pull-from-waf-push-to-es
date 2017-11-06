const client = require('./client');

module.exports = ({ body, index, type }) => client.bulk({
    index: index, type: type, body: body
});
