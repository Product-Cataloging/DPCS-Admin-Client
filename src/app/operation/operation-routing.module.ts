import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/container/category/category.component';
import { CurrencyComponent } from './components/container/currency/currency.component';
import { ProductItemComponent } from './components/container/product-item/product-item.component';
import { ProductComponent } from './components/container/product/product.component';
import { SupplierComponent } from './components/container/supplier/supplier.component';
import { UnitOfMeasureComponent } from './components/container/unit-of-measure/unit-of-measure.component';
import { UserComponent } from './components/container/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'suppliers', pathMatch: 'full' },
  { path: 'suppliers', component: SupplierComponent },
  // { path: 'categories', component: CategoryComponent },
  { path: 'products', component: ProductComponent },
  { path: 'products/:id', component: ProductItemComponent },
  { path: 'currencies', component: CurrencyComponent },
  { path: 'units_of_measure', component: UnitOfMeasureComponent },
  { path: 'users', component: UserComponent },
  { path: '**', redirectTo: 'suppliers' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule { }
