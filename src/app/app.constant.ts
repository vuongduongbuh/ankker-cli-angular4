export const AppConstants = {
    baseUrl: 'https://api.pthings.io/api',
    baseUrlLocal: 'http://localhost:7389/api',
    baseUrlStatic: 'https://api.pthings.io/static/',
    baseUrlStaticLocal: 'http://localhost:7389/static/',
    auth0ClientId: '6hPaLCrSONTsrQkLNIRgaEknCEOG5Y3u',
    auth0Domain: 'personallog.eu.auth0.com',
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