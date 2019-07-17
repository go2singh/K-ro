import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { CommonModule } from '@angular/common';

import { OthersRoutingModule } from './others-routing.module';
import { ReturnsComponent } from './returns/returns.component';
import { StakeholderComponent } from './stakeholder/stakeholder.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [ReturnsComponent, StakeholderComponent, UserComponent],
  imports: [
    CommonModule,
    OthersRoutingModule,
    FormsModule
  ],
  exports: [
    ReturnsComponent,
    StakeholderComponent,
    UserComponent
  ],
})
export class OthersModule { }
