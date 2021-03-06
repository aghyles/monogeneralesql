import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Generalemonosql03SharedModule } from 'app/shared/shared.module';
import { Generalemonosql03CoreModule } from 'app/core/core.module';
import { Generalemonosql03AppRoutingModule } from './app-routing.module';
import { Generalemonosql03HomeModule } from './home/home.module';
import { Generalemonosql03EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Generalemonosql03SharedModule,
    Generalemonosql03CoreModule,
    Generalemonosql03HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Generalemonosql03EntityModule,
    Generalemonosql03AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Generalemonosql03AppModule {}
