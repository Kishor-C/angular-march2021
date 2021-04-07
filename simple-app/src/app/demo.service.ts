import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  // HttpClient object is supplied to the DemoService
  constructor(private _http : HttpClient) { }

  // fake method which doesn't interact with webservice
  getUsers() : any {
    return ["Alex", "Bruce", "David"];
  }

  // calls the webservice and response data will be stored in the 
  // Observable, this request is not sending any data
  getAllUsers() : Observable<any> {
    let uri = "https://jsonplaceholder.typicode.com/users"
    return this._http.get(uri);
  }
 
}
