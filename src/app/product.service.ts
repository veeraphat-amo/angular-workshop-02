import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAllProduct(): Observable<Product[]> {

    const p1 = new Product('101', 'Name 01', 1000.0, 3.5, true, "google.com");
    const p2 = new Product('102', 'Name 02', 106000.0, 1, true, "google.com");
    const p3 = new Product('105', 'Name 05', 10000.0, 5, true, "google.com");
    return of([p1, p2, p3]);

    // return this.http.get<Product[]>(
    //   'https://165.22.255.58:3000/products'
    // );
  }

  constructor(private http: HttpClient) { }
}
