import { CookieService } from 'ngx-cookie-service';
import { Globals } from './../Common/Globals';
import { User } from './../Common/Product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private pageUrl = '/pages';
  private cookie: string = undefined;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getUsers(searchTerm: string): Observable<User[]> {
    this.updateCookie();
    let url = Globals.baseUrl + this.pageUrl + '/users?pageSize=999';
    if (searchTerm !== undefined && searchTerm !== '') {
      url += '&searchText=' + searchTerm;
    }
    return this.http.get<User[]>(url);
  }

  deleteUser(id: number): Observable<any> {
    this.updateCookie();
    const url = Globals.baseUrl + '/user/' + id;
    const httpOptions: object = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + this.cookie})
    };
    return this.http.delete<any>(url, httpOptions);
  }

  getMe(): Observable<User> {
    this.updateCookie();
    const url = Globals.baseUrl + '/user' + '/me';
    const httpOptions: object = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + this.cookie})
    };
    return this.http.get<User>(url, httpOptions);
  }

  updateCookie(): void {
      this.cookie = this.cookieService.get(Globals.tokenCookieString);
  }
}
