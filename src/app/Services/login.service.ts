import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Globals } from './../Common/Globals';
import { Token } from './../Common/Product';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

private pageUrl = '/user';
private cookie: string = undefined;
private httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

constructor(private http: HttpClient, private cookieService: CookieService) { }

login(acc: string, pass: string): Observable<Token> {

  if (acc.length === 0) { return; }
  if (pass.length < 6) { return; }

  const headers = new HttpHeaders({ 'Content-Type': 'application/json',
  Authorization: 'Basic ' + btoa(acc + ':' + pass), Accept: 'application/json'});

  console.log(btoa(acc + ':' + pass));

  const path = Globals.baseUrl + this.pageUrl + '/login';
  return this.http.post<Token>(path, {}, { headers });
}

logout(): Observable<any> {
  this.updateCookie();
  const url = Globals.baseUrl + this.pageUrl + '/logout';
  const options: object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + this.cookie})
  };
  return this.http.post(url, {}, options);
}

updateCookie(): void {
    this.cookie = this.cookieService.get(Globals.tokenCookieString);
}
}
