import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  getUsers() : any {
    return ["Alex", "Bruce", "David"];
  }

}
