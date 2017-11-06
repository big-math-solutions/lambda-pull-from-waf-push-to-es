const AWS = require('aws-sdk');
const waf = new AWS.WAF();
const {
	MAX_ITEMS: MaxItems = 100,
	RULE_ID: RuleId,
	TIME_WINDOW_TO_PULL_SAMPLE = 60000,
	WEB_ACL_ID: WebAclId
} = process.env;


module.exports = () => {
    const StartTime = new Date();
    const EndTime = new Date(StartTime.getTime() + TIME_WINDOW_TO_PULL_SAMPLE);
    const TimeWindow = {
	   EndTime,
	   StartTime
    };
	 const params = {
	  MaxItems,
	  RuleId,
	  TimeWindow,
	  WebAclId
	 };
    return waf.getSampledRequests(params)
    	.promise();
};
