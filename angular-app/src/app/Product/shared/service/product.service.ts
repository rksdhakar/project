import { Injectable } from '@angular/core';
import {DataService} from '../../../shared/dataservice.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
private data='../../../assets/productdata.json';
  
  constructor(private dataService:DataService) { }

  getProduct()
  {
    return this.dataService.getAll(this.data);
  }
  handleError(error:Error)
  {
    console.log(error);
  }
}
