import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = this._formBuilder.group({
    id : [], name : [], dob : [], phone : []
  });

  allProfiles : any = []; // class Profile - id, name, dob, phone
  message : string = "";
  status : boolean = false;
  constructor(private _formBuilder : FormBuilder, 
    private _service : ProfileService) { }

  ngOnInit(): void {
    
  }
  save() : void {
    this._service.storeProfile(this.profile.value)
    .subscribe((success) => {
      this.status = true;
      this.message = "Stored!";
      this.profile.reset();
    })
  }
  loadAll() : void {
    this._service.fetchAllProfiles()
    .subscribe(
      (success) => this.allProfiles = success, 
    (err) => console.log(err)
    );
  }

}
