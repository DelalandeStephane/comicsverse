import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import * as fr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports : [
    HeaderComponent,
    SearchFormComponent
  ],
  providers : [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
 }
