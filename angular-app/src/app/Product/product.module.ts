import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './product.component'
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {AppRoutingModule} from '../../app/app-routing/app-routing.module';
@NgModule({
  imports: [
    CommonModule,AppRoutingModule
  ],
  exports:[
    ProductComponent,ViewComponent
  ],
  declarations: [ViewComponent,ProductComponent, AddComponent, EditComponent]
})
export class ProductModule { }
