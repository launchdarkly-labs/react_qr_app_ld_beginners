function getClientKey() {
    let params = new URLSearchParams(document.location.search);
    let clientKey = params.get('clientKey') || params.get('clientkey');
    
    // Fallback to environment variable if no URL parameter provided
    if (!clientKey) {
        clientKey = process.env.REACT_APP_LAUNCHDARKLY_CLIENT_KEY;
    }
    
    return clientKey;
}

export default getClientKey;