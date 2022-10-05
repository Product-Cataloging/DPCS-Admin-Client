import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { AppCommonModule } from '../app.common.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ],
  exports: [
    ListComponent
  ]
})
export class SharedModule { }
