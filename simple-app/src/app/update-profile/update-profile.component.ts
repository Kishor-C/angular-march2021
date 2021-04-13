import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(
    private _activatedRoute : ActivatedRoute, 
    private _service : ProfileService,
    private _form : FormBuilder,
    private _router : Router
    ) { }

  profile = this._form.group({
    id : [], name : [], dob : [], phone : []
  });

  // need to get updateProfile/:profileId and pass to the webservice to fetch 
  // the particular profile & set the profile to profile form
  ngOnInit(): void {
    this._activatedRoute.params
    .subscribe((p : Params) => {
     this._service.fetchProfile(p.profileId).subscribe(data=> this.profile.setValue(data))
    });
  }

  updateProfile() : void {
    this._service.updateProfile(this.profile.value.id, this.profile.value)
    .subscribe(data => {
      this._router.navigate(["/fetchProfiles"]);
    });
  }

}
