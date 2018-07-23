import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ProductModule} from './Product/product.module';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from '../app/app-routing/app-routing.module';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,MatSortModule, MatTableModule } from "@angular/material";
//import {ProductComponent} from './Product/product.component'

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,ProductModule,HttpModule,AppRoutingModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
