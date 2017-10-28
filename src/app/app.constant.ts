export const AppConstants = {
    baseUrl: 'https://api.pthings.io/api',
    baseUrlLocal: 'http://localhost:7389/api',
    baseUrlStatic: 'https://api.pthings.io/static/',
    baseUrlStaticLocal: 'http://localhost:7389/static/',
    auth0ClientId: 'Dk1L_G1OxTmhAuT0CMF0BByHQoPfZYKi',
    auth0Domain: 'hbconsulting.eu.auth0.com',
    getBaseURL: () => {
        let baseURL = AppConstants.baseUrl;
        if (window.location.origin.includes('localhost')) {
            baseURL = AppConstants.baseUrlLocal;
        }
        return baseURL;
    },
    getStaticURL: () => {
        let baseURL = AppConstants.baseUrlStatic;
        if (window.location.origin.includes('localhost')) {
            baseURL = AppConstants.baseUrlStaticLocal;
        }
        return baseURL;
    }
};