import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact/contact.component';
import { PublicRoutingModule } from './public-routing.module';
import { PlayoutComponent } from './playout/playout.component';
import { PheaderComponent } from './pheader/pheader.component';

@NgModule({
  declarations: [
    ContactComponent,
    PlayoutComponent,
    PheaderComponent,
    ProductComponent,
  ],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
