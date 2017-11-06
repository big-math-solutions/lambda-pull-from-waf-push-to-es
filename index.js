const co = require('co');
const getDate = require('./lib/get-data');
const putData = require('./lib/put-bulk');
const parseData = require('./lib/parse-data');

exports.handler = (event, ctx, cb) => co(function *() {
    const data = yield getData();
    const body = yield parseData(data);
    const index = 'waf' + new Date().toISOString().split('T'.shift()
    yield putData({ body, index });
})
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
