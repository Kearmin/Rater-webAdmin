import { CookieService } from 'ngx-cookie-service';
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
  private cookie: string = undefined;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getProducts(searchTerm: string): Observable<Product[]> {
    this.updateCookie();
    const httpOptions = new HttpHeaders({ 'Content-Type': 'application/json',
    Authorization: 'Bearer ' + this.cookie });
    let url = Globals.baseUrl + this.pageUrl + '/products?pageSize=999';
    if (searchTerm !== undefined && searchTerm !== '') {
      url += '&searchText=' + searchTerm;
    }
    return this.http.get<Product[]>(url);
  }

  deleteProduct(id: number): Observable<any> {
    this.updateCookie();
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json',
    Authorization: 'Bearer ' + this.cookie });
    const options: object = {
      headers: httpHeaders
    };
    const url = Globals.baseUrl + '/product/' + id;
    return this.http.delete<any>(url, options);
  }

  updateCookie(): void {
      this.cookie = this.cookieService.get(Globals.tokenCookieString);
  }
}
