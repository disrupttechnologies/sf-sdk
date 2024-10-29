import { Api, HttpClient } from "../__generated__/merchantSDK";
export class MerchantClient {
    init(config) {
        const httpClient = this.generateHTTPClient(config);
        const api = new Api(httpClient);
        return api;
    }
    generateHTTPClient({ url, jwtToken }) {
        const httpClient = new HttpClient({
            baseURL: url + "/api/v1",
        });
        httpClient.instance.interceptors.request.use((config) => {
            if (jwtToken) {
                config.headers["Authorization"] = `bearer ${jwtToken}`;
            }
            return config;
        }, (error) => {
            // Handle the error
            return Promise.reject(error);
        });
        httpClient.instance.interceptors.response.use((response) => {
            return response;
        });
        return httpClient;
    }
}
