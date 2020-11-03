import { CookieService } from 'ngx-cookie-service';
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
  private cookie: string = undefined;


  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getRatings(searchTerm: string): Observable<Rating[]> {
    this.updateCookie();
    let url = Globals.baseUrl + this.pageUrl + '/ratings?pageSize=999';
    if (searchTerm !== undefined && searchTerm !== '') {
      url += '&searchText=' + searchTerm;
    }
    return this.http.get<Rating[]>(url);
  }

  deleteRating(id: number): Observable<any> {
    this.updateCookie();
    const url = Globals.baseUrl + '/rating/' + id;
    const httpOptions: object = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + this.cookie})
    };
    return this.http.delete<any>(url, httpOptions);
  }

  updateCookie(): void {
      this.cookie = this.cookieService.get(Globals.tokenCookieString);
  }
}
