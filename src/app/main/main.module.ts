import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './components/container/layout/layout.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { MaterialModule } from '../app.material.module';
import { NotificationDetailsComponent } from './components/ui/notification-details/notification-details.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NotificationDetailsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ]
})
export class MainModule { }
