import { IProduct } from 'src/app/_interfaces/product';
import { ProductService } from 'src/app/_services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-p-edit',
  templateUrl: './p-edit.component.html',
  styleUrls: ['./p-edit.component.css'],
})
export class PEditComponent implements OnInit {
  product: IProduct = {
    id: 0,
    user_id: 0,
    nom: '',
    description: '',
    updatedAt: '',
    createdAt: '',
    deletedAt: null,
  };
  constructor(
    private activated: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let cid = this.activated.snapshot.paramMap.get('id');
    console.log(cid);
    this.productService.getProduct(cid).subscribe((data) => {
      console.log(data);
      this.product = data.data;
    });
  }

  onSubmit() {
    this.productService
      .updateProduct(this.product)
      .subscribe((data) => console.log(data.message));
  }
}
