const assert = require('assert')
const proxyquire = require('proxyquire')

const body = {}
const index = {}
const putBulk = proxyquire('../lib/put-bulk',{
	'./client': {
		bulk: ({body: _body, index: _index}) => {
			assert.deepStrictEqual(body, _body)
			assert.deepStrictEqual(index, _index)
			return Promise.resolve()
		}
	}
})

describe('Test to put-bulk', () => {
	it('should put the data to client',async () => {
		await putBulk({body,index})
	});
});