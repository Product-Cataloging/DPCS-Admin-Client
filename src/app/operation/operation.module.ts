import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { SupplierFormComponent } from './components/ui/supplier-form/supplier-form.component';
import { SupplierComponent } from './components/container/supplier/supplier.component';
import { AppCommonModule } from '../app.common.module';


@NgModule({
  declarations: [
    SupplierFormComponent,
    SupplierComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule,
    AppCommonModule
  ]
})
export class OperationModule { }
