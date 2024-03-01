import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MythicPlusComponent } from './mythic-plus/mythic-plus.component';

const routes: Routes = [
  { path: '', component: MythicPlusComponent},
  /*{ path: '', component: HomepageComponent},*/ //revert to use homepage
  { path: 'mplus', component: MythicPlusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
