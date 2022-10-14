import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SupplierFormComponent } from './components/ui/supplier-form/supplier-form.component';
import { SupplierComponent } from './components/container/supplier/supplier.component';
import { AppCommonModule } from '../app.common.module';
import { CategoryComponent } from './components/container/category/category.component';
import { CategoryFormComponent } from './components/ui/category-form/category-form.component';
import { ProductComponent } from './components/container/product/product.component';
import { ProductFormComponent } from './components/ui/product-form/product-form.component';
import { CurrencyComponent } from './components/container/currency/currency.component';
import { CurrencyFormComponent } from './components/ui/currency-form/currency-form.component';
import { SharedModule } from '../shared/shared.module';
import { ProductItemComponent } from './components/container/product-item/product-item.component';
import { ProductItemFormComponent } from './components/ui/product-item-form/product-item-form.component';
import { UserComponent } from './components/container/user/user.component';
import { UserFormComponent } from './components/ui/user-form/user-form.component';
import { QuotationComponent } from './components/container/quotation/quotation.component'


@NgModule({
  declarations: [
    SupplierFormComponent,
    SupplierComponent,
    CategoryComponent,
    CategoryFormComponent,
    ProductComponent,
    ProductFormComponent,
    CurrencyComponent,
    CurrencyFormComponent,
    ProductItemComponent,
    ProductItemFormComponent,
    UserComponent,
    UserFormComponent,
    QuotationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppCommonModule,
    SharedModule
  ]
})
export class AdminModule { }
