const assert = require('assert');

const proxyquire = require('proxyquire');
const {getStub} = require('./features')
const data = {}
const stub = getStub(data)
const getData = proxyquire('../../lib/get-data', stub);


describe('Test to getData function', () => {
    it('should return the data', async () => {
    	const _data = await getData()
    	assert.deepStrictEqual(_data, data)
    });
});
