import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../auth/shared/role.guard';
import { CategoryComponent } from './components/container/category/category.component';
import { CurrencyComponent } from './components/container/currency/currency.component';
import { ProductItemComponent } from './components/container/product-item/product-item.component';
import { ProductComponent } from './components/container/product/product.component';
import { QuotationComponent } from './components/container/quotation/quotation.component';
import { SupplierComponent } from './components/container/supplier/supplier.component';
import { UserComponent } from './components/container/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'suppliers', pathMatch: 'full' },
  { path: 'suppliers', component: SupplierComponent },
  // { path: 'categories', component: CategoryComponent },
  { path: 'products', component: ProductComponent },
  { path: 'products/:id', component: ProductItemComponent },
  // { path: 'currencies', component: CurrencyComponent },
  { path: 'users', component: UserComponent, canActivate: [RoleGuard] },
  { path: 'quotations', component: QuotationComponent },
  { path: '**', redirectTo: 'suppliers' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
