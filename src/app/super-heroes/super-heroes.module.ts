import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperHeroesListComponent } from './components/super-heroes-list/super-heroes-list.component';
import { SuperHeroesService } from './services/super-heroes.service';
import { SuperHeroCardComponent } from './components/super-hero-card/super-hero-card.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { SuperHeroPageComponent } from './components/super-hero-page/super-hero-page.component';
import { superHeroesRoutingModule } from './super-heroes-routing.module';




@NgModule({
  declarations: [
    SuperHeroesListComponent,
    SuperHeroCardComponent,
    SuperHeroPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    superHeroesRoutingModule
  ],
  exports : [
    SuperHeroesListComponent
  ],
  providers : [
    SuperHeroesService
  ]
})
export class SuperHeroesModule { }
