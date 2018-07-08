import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ProductModule} from './Product/product.module';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from '../app/app-routing/app-routing.module';
//import {ProductComponent} from './Product/product.component'

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,ProductModule,HttpModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
