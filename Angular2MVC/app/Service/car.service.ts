
import { Observable } from 'rxjs/Observable';

import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CarService {

    constructor(private http: Http) { }

    getCarsSmall(): Observable<any> {
        let headers = this.handleHeaders();
        let options = new RequestOptions({ headers: headers });
        return this.http.get('app/assets/cars-small.json')
            .map((response: Response) => response.json());
    }

    getCarsMedium(): Observable<any> {

        let headers = this.handleHeaders();
        let options = new RequestOptions({ headers: headers });
        return this.http.get('app/assets/cars-medium.json')
            .map((response: Response) => response.json());
    }

    getCarsLarge(): Observable<any> {

        let headers = this.handleHeaders();
        let options = new RequestOptions({ headers: headers });
        return this.http.get('app/assets/cars-large.json')
            .map((response: Response) => response.json());
    }

    getCarsHuge(): Observable<any> {

        let headers = this.handleHeaders();
        let options = new RequestOptions({ headers: headers });
        return this.http.get('app/assets/cars-huge.json')
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


export interface Car {
    vin?:any;
    year?: any;
    brand?: any;
    color?: any;
    price?: any;
    saleDate?: any;
}