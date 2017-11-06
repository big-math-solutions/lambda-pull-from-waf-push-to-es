const assert = require('assert');

module.exports = {
    getStub: (data) => {
        const MAX_ITEMS = 'MAX_ITEMS';
        const RULE_ID = 'RULE_ID';
        const TIME_WINDOW_TO_PULL_SAMPLE = 1000;
        const WEB_ACL_ID = 'WEB_ACL_ID';
        Object.assign(process.env, {
            MAX_ITEMS,
            RULE_ID,
            TIME_WINDOW_TO_PULL_SAMPLE,
            WEB_ACL_ID
        });
        const stub = {
		    'aws-sdk':{
		    	WAF: class {
				    	getSampledRequests({ MaxItems, RuleId, TimeWindow:{ EndTime, StartTime }, WebAclId }) {
				    		assert.equal(MaxItems, MAX_ITEMS);
				    		assert.equal(RuleId, RULE_ID);
				    		assert.equal(WebAclId, WEB_ACL_ID);
				    		assert(EndTime instanceof Date);
				    		assert(StartTime instanceof Date);
				    		assert.equal(WebAclId, WEB_ACL_ID);

				    		return {
				    			promise: () => Promise.resolve(data)
				    		};
				    	}
			    }
    }
        };
        return stub;
    }
};
