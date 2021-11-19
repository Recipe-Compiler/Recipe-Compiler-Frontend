import axios, { Axios } from 'axios';

class Service {
  private service: Axios;
  constructor() {
    const service = axios.create({
      headers: {csrf: 'token'}
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response: any) {
    return response;
  }

  handleError = (error: any) => {
    switch (error.response.status) {
      case 401:
        this.redirectTo(document, '/')
        break;
      case 404:
        this.redirectTo(document, '/404')
        break;
      default:
        this.redirectTo(document, '/500')
        break;
    }
    return Promise.reject(error)
  }

  redirectTo = (document: Document, path: any) => {
    document.location = path
  }
  
  get(path: any, callback: any) {
    return this.service.get(path).then(
      (response) => callback(response.status, response.data)
    );
  }

  patch(path: any, payload: any, callback: any) {
    return this.service.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload
    }).then((response) => callback(response.status, response.data));
  }

  post(path: any, payload: any, callback: any) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload
    }).then((response) => callback(response.status, response.data));
  }
}

export default new Service;