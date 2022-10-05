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
import { CurrencyComponent } from './components/container/currency/currency.component';
import { CurrencyFormComponent } from './components/ui/currency-form/currency-form.component';
import { UnitOfMeasureComponent } from './components/container/unit-of-measure/unit-of-measure.component';
import { UnitOfMeasureFormComponent } from './components/ui/unit-of-measure-form/unit-of-measure-form.component';
import { SharedModule } from '../shared/shared.module'


@NgModule({
  declarations: [
    SupplierFormComponent,
    SupplierComponent,
    CategoryComponent,
    CategoryFormComponent,
    ProductComponent,
    ProductFormComponent,
    CustomerComponent,
    CustomerFormComponent,
    CurrencyComponent,
    CurrencyFormComponent,
    UnitOfMeasureComponent,
    UnitOfMeasureFormComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule,
    AppCommonModule,
    SharedModule
  ]
})
export class OperationModule { }
