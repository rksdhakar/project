import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/service/product.service'
import { containerRefreshEnd } from '@angular/core/src/render3/instructions';
import {Observable} from 'rxjs';
import {Productdetail} from '../shared/model/productdetail'
import {map} from 'rxjs/operators'
import { parse } from 'querystring';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private productService:ProductService ) { }
  productDetail:Productdetail;
  ngOnInit() {
    this.getProduct();
  }
   getProduct()
   {
     this.productService.getProduct().subscribe(
       data=>{
         this.productDetail=<Productdetail>data.json();
       console.log(data)}
      );
  //  this.productDetail = this.productService.getProduct().pipe(map(data=> data.json  ));
   }
}
