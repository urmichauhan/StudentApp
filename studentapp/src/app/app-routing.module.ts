import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentregistrationComponent } from './pages/studentregistration/studentregistration.component';
import { StudentdetailsComponent } from './pages/studentdetails/studentdetails.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: "", redirectTo: "data", pathMatch: "full" },
  { path: "data", component: StudentregistrationComponent },
  { path: "show", component: StudentdetailsComponent },
  { path: "pagenotfound", component: PagenotfoundComponent },
  { path: "**", redirectTo: "pagenotfound", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
