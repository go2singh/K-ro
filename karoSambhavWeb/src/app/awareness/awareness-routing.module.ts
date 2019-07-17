import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderComponent} from './calender/calender.component';
import { PrOutreachComponent} from './pr-outreach/pr-outreach.component';
import { SchoolsComponent} from './schools/schools.component';

const routes: Routes = [


  {path: 'calender', component: CalenderComponent},
  {path: 'prOutreach', component: PrOutreachComponent},
  {path: 'schools', component: SchoolsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwarenessRoutingModule { }
