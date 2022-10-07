import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppCommonModule } from './app.common.module';
import { ToastModule } from 'primeng/toast';
import { AuthModule } from './auth/auth.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
    AppCommonModule,
    AuthModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
