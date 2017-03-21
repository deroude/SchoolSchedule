import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Inject } from '@angular/core';
import { AppSettings } from './../app.settings';
import 'rxjs/add/operator/toPromise';

export class BasicService {

    constructor( @Inject(Http) protected http: Http) { }

    protected get<T>(path: string): Promise<T> {
        return this.http.get(AppSettings.API_ENDPOINT + path)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    protected postJson(path: string, body: any): Promise<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(AppSettings.API_ENDPOINT + path, body, options)
            .toPromise()
            .catch(this.handleError);
    }

    protected putJson(path: string, body: any): Promise<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers});
        return this.http.put(AppSettings.API_ENDPOINT + path, body, options)
            .toPromise()
            .catch(this.handleError);
    }

    protected handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}