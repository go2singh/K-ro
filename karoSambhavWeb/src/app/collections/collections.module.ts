import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { ReportComponent } from './report/report.component';
import { TransactionComponent } from './transaction/transaction.component';
import { EprtargetsComponent } from './eprtargets/eprtargets.component';

@NgModule({
  declarations: [ ReportComponent, TransactionComponent, EprtargetsComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    FormsModule
  ],
  exports: [
    ReportComponent,
    TransactionComponent,
    EprtargetsComponent
  ],
})
export class CollectionsModule { }
