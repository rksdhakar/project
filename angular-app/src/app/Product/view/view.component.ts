import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/service/product.service'
import {Productdetail} from '../shared/model/productdetail'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  displayedColumns: string[] = ['id', 'image', 'name', 'price','availableQuantity','action'];
  constructor(private productService:ProductService,private spinnerService: Ng4LoadingSpinnerService ) { }
  productDetail:Productdetail;
  ngOnInit() {
    this.getProduct();
  }
   getProduct()
   {
    this.spinnerService.show();

     this.productService.getProduct().subscribe(
       data=>{
         this.productDetail=<Productdetail>data;
         this.spinnerService.hide();
       console.log(data)}
      );
  //  this.productDetail = this.productService.getProduct().pipe(map(data=> data.json  ));
   }
}
