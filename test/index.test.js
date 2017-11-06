const assert = require('assert')
const proxyquire = require('proxyquire')
const AwsTest = require('aws-lambda-testing')

const data = {}
const parsed = {}
const stub = {
	'./lib/get-data': () => Promise.resolve(data),
	'./lib/parse-data': (_data) => {
		assert.deepStrictEqual(_data, data)
		return parsed
	},
	'./lib/put-bulk': ({index, body}) => {
		assert.deepStrictEqual(body, parsed)
		assert(index)
		return Promise.resolve()
	},
}
const {handler} = proxyquire('../index', stub)
const lambdaTest = new AwsTest(handler)

describe('test to handler of lambda function', function() {
	it('should exec the handler', async () => {
		await lambdaTest.exec()
	});
});