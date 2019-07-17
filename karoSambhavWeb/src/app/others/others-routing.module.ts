import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReturnsComponent} from './returns/returns.component';
import { StakeholderComponent} from './stakeholder/stakeholder.component';
import { UserComponent} from './user/user.component';


const routes: Routes = [

  {path: 'returns', component: ReturnsComponent},
  {path: 'stakeholder', component: StakeholderComponent},
  {path: 'user', component: UserComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule { }
