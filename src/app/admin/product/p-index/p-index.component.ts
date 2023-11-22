import { IProduct } from 'src/app/_interfaces/product';
import { ProductService } from 'src/app/_services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-index',
  templateUrl: './p-index.component.html',
  styleUrls: ['./p-index.component.css'],
})
export class PIndexComponent implements OnInit {
  productList: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      console.log(data);
      this.productList = data.data;
    });
  }

  trash(id: number | undefined) {
    console.log(id);
    this.productService.trashProduct(id).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }

  untrash(id: number | undefined) {
    this.productService.untrashProduct(id).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }
  delete(id: number | undefined) {
    this.productService.deleteProduct(id).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }
}
