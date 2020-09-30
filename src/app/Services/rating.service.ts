import { Globals } from './../Common/Globals';
import { Rating } from './../Common/Product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private pageUrl = '/pages';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getProducts(searchTerm: string): Observable<Rating[]> {
    let url = Globals.baseUrl + this.pageUrl + '/ratings?pageSize=999';
    if (searchTerm !== undefined && searchTerm !== '') {
      url += '&searchText=' + searchTerm;
    }
    return this.http.get<Rating[]>(url);
  }
}
