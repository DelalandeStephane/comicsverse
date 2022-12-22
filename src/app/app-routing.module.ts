import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  { path:'superhero',
  loadChildren: () => import('./super-heroes/super-heroes.module').then(m => m.SuperHeroesModule)
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
