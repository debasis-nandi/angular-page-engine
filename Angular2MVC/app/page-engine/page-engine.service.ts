
import { Observable } from 'rxjs/Observable';

import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PageEngineService {

    constructor(private http: Http) { }

    getPageMetaData(): Observable<any> {
        let headers = this.handleHeaders();
        let options = new RequestOptions({ headers: headers });
        return this.http.get('app/assets/db-controls.json')
            .map((response: Response) => response.json());
    }
    
    private handleHeaders(): Headers {
        return new Headers({
            'Content-Type': 'application/json'
        });
    }

    private handleError(error: Response) {
        return Observable.throw(error);
    }

}

