import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { CommonModule } from '@angular/common';

import { AwarenessRoutingModule } from './awareness-routing.module';
import { SchoolsComponent } from './schools/schools.component';
import { PrOutreachComponent } from './pr-outreach/pr-outreach.component';
import { CalenderComponent } from './calender/calender.component';

@NgModule({
  declarations: [SchoolsComponent, PrOutreachComponent, CalenderComponent],
  imports: [
    CommonModule,
    AwarenessRoutingModule,
    FormsModule
  ],
  exports: [
    SchoolsComponent,
    PrOutreachComponent,
    CalenderComponent
  ],
})
export class AwarenessModule { }
