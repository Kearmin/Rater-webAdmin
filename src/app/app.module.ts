import { DetailUserComponent } from './Components/detail-user/detail-user.component';
import { DetailRatingComponent } from './Components/detail-rating/detail-rating.component';
import { DetailProductComponent } from './Components/detail-product/detail-product.component';
import { MasterComponent } from './Components/Master/master/master.component';
import { MainComponent } from './Components/Main/main/main.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MasterComponent,
    DetailUserComponent,
    DetailRatingComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
