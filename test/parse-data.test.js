const assert = require('assert');

const parseData = require('../lib/parse-data');
const data = require('./WAS_sampled_request');

describe('Test to parse data', () => {
    it('should parse the data', () => {
    	const parsed = parseData(data);
    	assert(Array.isArray(parsed));
    });
});
