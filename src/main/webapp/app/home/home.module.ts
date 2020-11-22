import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Generalemonosql03SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Generalemonosql03SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Generalemonosql03HomeModule {}
