import { Product } from './../../Common/Product';
import { ProductService } from './../../Services/product.service';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit, AfterViewInit {

  products$: Observable<Product[]>;
  @Input() searchTerms: Subject<string>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.searchTerms.pipe(
      debounceTime(500),
      switchMap((term: string) => this.productService.getProducts(term))
    );
  }

  ngAfterViewInit(): void {
    this.searchTerms.next();
  }

  onDeleteClick(id: number): void {
    this.productService.deleteProduct(id).subscribe( _ => {
      console.log('deleted product with id: ' + id);
      this.searchTerms.next('');
    }
    );
  }
}
