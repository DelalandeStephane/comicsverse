import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ProgressCircleComponent } from './components/progress-circle/progress-circle.component';



@NgModule({
  declarations: [
    LoaderComponent,
    ProgressCircleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    ProgressCircleComponent
  ]
})
export class SharedModule { }
