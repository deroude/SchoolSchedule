import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LipsumService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private textApi = 'https://baconipsum.com/api/?type=meat-and-filler';

    constructor(private http: Http) { }

    getText(): Promise<string[]> {
        return this.http.get(this.textApi)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}