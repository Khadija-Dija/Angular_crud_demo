import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/_interfaces/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productList: IProduct[] = [];

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      console.log(data);
      this.productList = data.data;
    });
  }
}
