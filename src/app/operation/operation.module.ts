import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { SupplierFormComponent } from './components/ui/supplier-form/supplier-form.component';
import { SupplierComponent } from './components/container/supplier/supplier.component';
import { AppCommonModule } from '../app.common.module';
import { CategoryComponent } from './components/container/category/category.component';
import { CategoryFormComponent } from './components/ui/category-form/category-form.component';
import { ProductComponent } from './components/container/product/product.component';
import { ProductFormComponent } from './components/ui/product-form/product-form.component';
import { CustomerComponent } from './components/container/customer/customer.component';
import { CustomerFormComponent } from './components/ui/customer-form/customer-form.component';


@NgModule({
  declarations: [
    SupplierFormComponent,
    SupplierComponent,
    CategoryComponent,
    CategoryFormComponent,
    ProductComponent,
    ProductFormComponent,
    CustomerComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule,
    AppCommonModule
  ]
})
export class OperationModule { }
