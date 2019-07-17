import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EprtargetsComponent} from './eprtargets/eprtargets.component';
import { ReportComponent} from './report/report.component';
import { TransactionComponent} from './transaction/transaction.component';


const routes: Routes = [
  {path: 'eprtargets', component: EprtargetsComponent},
  {path: 'report', component: ReportComponent},
  {path: 'transaction', component: TransactionComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
