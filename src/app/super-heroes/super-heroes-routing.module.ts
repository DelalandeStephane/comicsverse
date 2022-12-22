import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperHeroPageComponent } from './components/super-hero-page/super-hero-page.component';

const routes: Routes = [
    { path: ':id', component: SuperHeroPageComponent }
   
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class superHeroesRoutingModule {}