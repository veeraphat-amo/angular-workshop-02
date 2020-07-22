import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { RatingComponent } from '../rating/rating.component'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filterData: string = '';


  constructor(private service: ProductService) { }

  ngOnInit(): void {
    //this.getAll();

    this.service
    .getAllProduct()
    .subscribe((allProduct) => (this.products = allProduct));
    
  }

  getAll () : void {
    this.service.getAllProduct().subscribe((products) => {
      return (this.products = products);
    });
  }

  onRatingClicked(message: string): void {
    alert(message);
  }


}
