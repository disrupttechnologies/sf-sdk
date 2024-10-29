import { AxiosError, AxiosRequestConfig, AxiosResponse } from "../../node_modules/axios/index"
import { Api, HttpClient } from "../__generated__/adminSDK"

interface SDKInitConfig {
  url: string
  jwtToken ?: string
}
export type AdminApiSDK = Api<unknown>




export class AdminSDKClient {
  init(config: SDKInitConfig):Api<unknown>  {
    const httpClient = this.generateHTTPClient(config)
    const api = new Api(httpClient)
    return api
  }

  private generateHTTPClient({ url,jwtToken }: SDKInitConfig) {
    const httpClient = new HttpClient({
      baseURL: url+"/api/v1",
    })
 
   


    httpClient.instance.interceptors.request.use(
      (config) => {
        if (jwtToken) {
          config.headers!["Authorization"] = `bearer ${jwtToken}`

        }
        return config
      },
      (error:AxiosError) => {
        // Handle the error
        return Promise.reject(error)
      }
    )
    httpClient.instance.interceptors.response.use(
      (response) => {
        return response
      },
    
    )

    return httpClient
  }
}
