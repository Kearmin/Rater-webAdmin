import { LoginComponent } from './Components/Login/Login.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailUserComponent } from './Components/detail-user/detail-user.component';
import { DetailRatingComponent } from './Components/detail-rating/detail-rating.component';
import { DetailProductComponent } from './Components/detail-product/detail-product.component';
import { MainComponent } from './Components/Main/main/main.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailUserComponent,
    DetailRatingComponent,
    DetailProductComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
