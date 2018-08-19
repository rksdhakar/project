import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/service/product.service';
import {Productdetail} from '../shared/model/productdetail';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  displayedColumns: string[] = ['id', 'image', 'name', 'price','availableQuantity','action'];
  constructor(private productService:ProductService) { }
  productDetail:Productdetail;
  ngOnInit() {
    this.getProduct();
  }
   getProduct()
   {
     this.productService.getProduct().subscribe(
       data=>{
         this.productDetail=<Productdetail>data;
       console.log(data)}
      );
   }
}
