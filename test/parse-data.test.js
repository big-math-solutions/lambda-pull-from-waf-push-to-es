const assert = require('assert');

const parseData = require('../lib/parse-data');
const data = require('./WAS_sampled_request');
const parsed = parseData(data);

describe('Test to parse data', () => {
    it('should parse the data', () => {
    	assert(Array.isArray(parsed));
    });

    it('should the correct properties in parsed object', () => {
    	parsed.forEach((element) => assert(element.Headers || element._type));
    });
});
