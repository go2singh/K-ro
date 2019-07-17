import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { CommonModule } from '@angular/common';

import { ProdashRoutingModule } from './prodash-routing.module';
import { PdcollectionsComponent } from './pdcollections/pdcollections.component';
import { PdawarenessComponent } from './pdawareness/pdawareness.component';
import { PdimpactComponent } from './pdimpact/pdimpact.component';
import { PdnetworkComponent } from './pdnetwork/pdnetwork.component';

@NgModule({
  declarations: [PdcollectionsComponent, PdawarenessComponent, PdimpactComponent, PdnetworkComponent],
  imports: [
    CommonModule,
    ProdashRoutingModule,
    FormsModule
  ],
  exports: [
    PdcollectionsComponent,
    PdawarenessComponent,
    PdimpactComponent,
    PdnetworkComponent
  ],
})
export class ProdashModule { }
