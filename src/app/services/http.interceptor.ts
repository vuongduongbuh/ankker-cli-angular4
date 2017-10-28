import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
    ConnectionBackend,
    RequestOptions,
    Request,
    RequestOptionsArgs,
    Response,
    Http
} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class InterceptedHttp extends Http {
    router: Router;

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, router: Router) {
        super(backend, defaultOptions);
        this.router = router;
    }

    request(
        url: string | Request,
        options?: RequestOptionsArgs
    ): Observable<Response> {
        return super.request(url, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, options)
            .catch(e => {
                if (e.status === 401) {
                    this.onUnauthorized();
                }
                return Observable.throw(e);
            });
    }

    post(
        url: string,
        body: string,
        options?: RequestOptionsArgs
    ): Observable<Response> {
        return super.post(url, body, options)
            .catch(e => {
                if (e.status === 401) {
                    this.onUnauthorized();
                }
                return Observable.throw(e);
            });
    }

    put(
        url: string,
        body: string,
        options?: RequestOptionsArgs
    ): Observable<Response> {
        return super.put(url, body, options)
            .catch(e => {
                if (e.status === 401) {
                    this.onUnauthorized();
                }
                return Observable.throw(e);
            });
    }

    patch(
        url: string,
        body: string,
        options?: RequestOptionsArgs
    ): Observable<Response> {
        return super.patch(url, body, options)
            .catch(e => {
                if (e.status === 401) {
                    this.onUnauthorized();
                }
                return Observable.throw(e);
            });
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, options)
            .catch(e => {
                if (e.status === 401) {
                    this.onUnauthorized();
                }
                return Observable.throw(e);
            });
    }

    private onUnauthorized() {
        this.router.navigate(['logout']);
    }
}
