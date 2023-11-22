import { ProductService } from 'src/app/_services/product.service';
import { IProduct } from 'src/app/_interfaces/product';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-p-add',
  templateUrl: './p-add.component.html',
  styleUrls: ['./p-add.component.css'],
})
export class PAddComponent implements OnInit {
  product: IProduct = {
    user_id: 0,
    nom: '',
    description: '',
  };

  constructor(
    private productService: ProductService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    let u = this.tokenService.getPayload();
    this.product.user_id = u.id;

    this.productService
      .addProduct(this.product)
      .subscribe((data) => console.log(data.message));
  }
}
