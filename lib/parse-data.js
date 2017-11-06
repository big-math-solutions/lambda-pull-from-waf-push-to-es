module.exports = ({ SampledRequests }) => SampledRequests.map((SampleRequest) => {
    const parsed = Object.assign({}, SampleRequest, SampleRequest.Request);
    delete parsed.Request;
    parsed.Headers = parsed.Headers.map((header) => ({ [header.Name]: header.Value }));
    return parsed;
})
	.reduce((init, SampledRequest) => {
    const _init = init.concat([ { type: SampledRequest.ClientIP } ]);
    return _init;
}, []);
