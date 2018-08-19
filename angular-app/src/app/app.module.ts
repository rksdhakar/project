import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ProductModule} from './Product/product.module';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from '../app/app-routing/app-routing.module';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,MatSortModule, MatTableModule } from "@angular/material";
import {DataService, CustomInterceptor} from '../app/shared/dataservice.service';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http'; 
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import {ProductComponent} from './Product/product.component'

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,ProductModule,HttpModule,AppRoutingModule,HttpClientModule,Ng4LoadingSpinnerModule.forRoot(),
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
   
  ],
  providers: [DataService,{provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor,
    multi: true}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
