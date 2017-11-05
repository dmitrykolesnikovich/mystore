import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/product";
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'auction-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[]=[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}