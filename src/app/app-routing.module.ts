import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SpaceModule} from './space/space.module';
import {BlackHoleComponent} from './black-hole/black-hole.component';


const routes: Routes = [
  {path: '', redirectTo: 'space', pathMatch: 'full'},
  {path: 'intel', loadChildren: () => import('./intel/intel.module').then(module => module.IntelModule)},
  {path: '**', component: BlackHoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SpaceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
