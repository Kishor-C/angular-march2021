import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-fetch-profiles',
  templateUrl: './fetch-profiles.component.html',
  styleUrls: ['./fetch-profiles.component.css']
})
export class FetchProfilesComponent implements OnInit {

  profiles : any = []
  constructor(private _service : ProfileService) { }

  ngOnInit(): void {
   this._service.fetchAllProfiles()
   .subscribe((data) => {this.profiles = data}); 
  }

}
