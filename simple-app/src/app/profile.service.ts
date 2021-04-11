import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUri = "http://localhost:3000/profiles";

  constructor(private _http : HttpClient) { }

  // retrieves all the data from webservice
  fetchAllProfiles() : Observable<any> {
    return this._http.get(this.baseUri);
  }
  // passes the data to the webservice
  storeProfile(data : any) : Observable<any> {
    return this._http.post(this.baseUri, data);
  }
  deleteById(id : number) : Observable<any> {
    let uri = `${this.baseUri}/${id}`;
    return this._http.delete(uri);
  }
  
}
