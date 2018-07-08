import { Injectable } from '@angular/core';
import {Productdetail} from '../model/productdetail';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
private data='../../../assets/productdata.json';
  
  constructor(private http:Http) { }

  getProduct()
  {
     return this.http.get(this.data);
  }
  handleError(error:Error)
  {
    console.log(error);
  }
}
