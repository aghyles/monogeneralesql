import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Generalemonosql03SharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [Generalemonosql03SharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent],
})
export class DocsModule {}
