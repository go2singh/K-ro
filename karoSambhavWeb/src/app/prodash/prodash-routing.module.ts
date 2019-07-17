import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdawarenessComponent} from './pdawareness/pdawareness.component';
import { PdcollectionsComponent} from './pdcollections/pdcollections.component';
import { PdimpactComponent} from './pdimpact/pdimpact.component';
import { PdnetworkComponent} from './pdnetwork/pdnetwork.component';


const routes: Routes = [

  {path: 'pdawareness', component: PdawarenessComponent},
  {path: 'pdcollections', component: PdcollectionsComponent},
  {path: 'pdimpact', component: PdimpactComponent},
  {path: 'pdnetwork', component: PdnetworkComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdashRoutingModule { }
