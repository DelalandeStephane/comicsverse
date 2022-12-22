import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page.component';
import { SuperHeroesModule } from '../super-heroes/super-heroes.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    SuperHeroesModule,
    CoreModule
  ],
  exports : [
    LandingPageComponent
  ]
})
export class LandingPageModule {

 }
