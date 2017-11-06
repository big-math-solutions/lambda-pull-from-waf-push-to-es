module.exports = ({ SampledRequests }) => SampledRequests
    .map((SampleRequest) => {
        const parsed = Object.assign({}, SampleRequest, SampleRequest.Request);
        delete parsed.Request;
        parsed.Headers = parsed.Headers
        	.map((header) => ({ [header.Name]: header.Value }))
        	.reduce((init, header) => {
        		const _init = Object.assign({}, init, header);
        		return _init;
        	});
        return parsed;
    })
	.reduce((init, SampledRequest) => {
        const _init = init.concat([ { _type: SampledRequest.ClientIP }, SampledRequest ]);
        return _init;
    }, []);
