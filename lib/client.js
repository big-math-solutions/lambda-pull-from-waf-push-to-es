const AWS = require('aws-sdk');
const {
	HOST:URL,
	AWS_ACCESS_KEY_ID: ACCESS_KEY,
	AWS_SECRET_ACCESS_KEY: SECRET_KEY,
	AWS_SESSION_TOKEN: SESSION_TOKEN,
	REGION = 'us-east-1'
} = process.env;
AWS.config.update({
    credentials: new AWS.Credentials({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_KEY,
        sessionToken: SESSION_TOKEN
    }),
    region: REGION
});

const es = require('elasticsearch').Client({
    hosts: URL,
    connectionClass: require('http-aws-es')
});

module.exports = es;
