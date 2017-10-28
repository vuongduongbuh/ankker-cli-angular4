import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppConstants } from '../app.constant';

@Injectable()
export class HttpService {
    public header: any;
    public baseURL: string;

    constructor(private http: Http) {
        this.baseURL = this.getBaseURL();
    }

    post(url, data): Observable<Response> {
        let header = this.appendHeaders();
        return this.http.post(this.baseURL + url, JSON.stringify(data), {
            headers: header
        });
    }

    get(url): Observable<Response> {
        let header = this.appendHeaders();
        return this.http.get(this.baseURL + url, {
            headers: header
        });
    }

    put(url, data): Observable<Response> {
        let header = this.appendHeaders();
        return this.http.put(this.baseURL + url, JSON.stringify(data), {
            headers: header
        });
    }

    patch(url, data): Observable<Response> {
        let header = this.appendHeaders();
        return this.http.patch(this.baseURL + url, JSON.stringify(data), {
            headers: header
        });
    }

    delete(url): Observable<Response> {
        let header = this.appendHeaders();
        return this.http.delete(this.baseURL + url, {
            headers: header
        });
    }

    uploadFiles(file) {
        let header = new Headers({
            'Content-Type': 'multipart/form-data'
        });

        if (file.name) {
            return this.http
                .post(this.baseURL + '/v1/upload', file,{
                    headers: header
                })
                .map(url => url.json())
                .catch((error, response) => {
                    return Observable.throw(error);
                });
        } else {
            return null;
        }
    }

    setAccessToken(accessToken: string) {
        localStorage.setItem('access_token', accessToken);
    }

    getBaseURL() {
        let baseURL = AppConstants.baseUrl;
        if (window.location.origin.includes('localhost')) {
            baseURL = AppConstants.baseUrlLocal;
        }
        return baseURL;
    }

    private appendHeaders() {
        let accessToken = localStorage.getItem('id_token');
        let header = new Headers({
            'Content-Type': 'application/json'
        });
        if (accessToken) {
            header.append('Authorization', 'Bearer ' + accessToken);
        }

        return header;
    }
}
