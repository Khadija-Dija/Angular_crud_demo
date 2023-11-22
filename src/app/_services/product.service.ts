import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApi } from '../_interfaces/api';
import { IProduct, IDataProduct, ISingleProduct } from '../_interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:8888/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IDataProduct> {
    return this.http.get<IDataProduct>(this.url);
  }

  getProduct(pid: string | null): Observable<ISingleProduct> {
    return this.http.get<ISingleProduct>(this.url + '/' + pid);
  }

  addProduct(product: IProduct): Observable<IApi> {
    return this.http.put<IApi>(this.url, product);
  }

  updateProduct(product: IProduct): Observable<IApi> {
    return this.http.patch<IApi>(this.url + '/' + product.id, product);
  }

  trashProduct(pid: number | undefined): Observable<IApi> {
    return this.http.delete<IApi>(this.url + '/trash/' + pid);
  }

  untrashProduct(pid: number | undefined): Observable<IApi> {
    return this.http.post<IApi>(this.url + '/untrash/' + pid, {});
  }

  deleteProduct(pid: number | undefined) {
    return this.http.delete<IApi>(this.url + '/' + pid);
  }
}
