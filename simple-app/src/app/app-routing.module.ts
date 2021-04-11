import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import { FetchProfilesComponent } from './fetch-profiles/fetch-profiles.component';
import { StoreProfilesComponent } from './store-profiles/store-profiles.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {path : "", redirectTo : "fetchProfiles", pathMatch : "prefix"}, 
  {path : 'storeProfile', component : StoreProfilesComponent},
  {path : 'fetchProfiles', component : FetchProfilesComponent},
  {path : 'updateProfile', component : UpdateProfileComponent},
  {path : 'deleteProfile', component : DeleteProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
