import { Product } from './../Common/Product';
import { Globals } from './../Common/Globals';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private pageUrl = '/pages';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
                               Authorization: 'Bearer ' + '5fvpn9e0TEd+wXzQXBkCoA==' })
  };

  constructor(private http: HttpClient) { }

  getProducts(searchTerm: string): Observable<Product[]> {
    let url = Globals.baseUrl + this.pageUrl + '/products?pageSize=999';
    if (searchTerm !== undefined && searchTerm !== '') {
      url += '&searchText=' + searchTerm;
    }
    return this.http.get<Product[]>(url);
  }

  deleteProduct(id: number): Observable<any> {
    const url = Globals.baseUrl + '/product/' + id;
    return this.http.delete<any>(url, this.httpOptions);
  }

}
