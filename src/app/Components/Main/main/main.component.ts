import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './../../../Services/login.service';
import { UserService } from './../../../Services/user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Rating, User } from './../../../Common/Product';
import { UseCaseType } from '../../../Common/UseCaseType';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { faStar, faUsers, faProjectDiagram, faCarrot} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', '../../../../../node_modules/font-awesome/css/font-awesome.css']
})

export class MainComponent implements OnInit {

  kLightBlueColor = '#00b7ff';
  kBlackColor = '#000000';

  selectedUseCase: UseCaseType;
  headerTitle = 'Products';
  searchTerms = new Subject<string>();

  userName = '';

  faStar = faStar;
  faUsers = faUsers;
  faCarrot = faCarrot;

  starColor = this.kBlackColor;
  userColor = this.kBlackColor;
  productColor = this.kBlackColor;

  constructor(private userService: UserService,
              private loginsService: LoginService,
              private router: Router,
              private cookieService: CookieService) { }

  ngOnInit(): void {
    this.selectedUseCase = UseCaseType.Product;
    this.imageClicked(0);

    this.userService.getMe().subscribe( user => {
      console.log( 'ME: ' + user);
      this.userName = user.accountName;
    });
  }

  logout(): void {
    this.loginsService.logout()
    .subscribe( _ => {
      this.cookieService.deleteAll();
      this.router.navigate(['/login']);
    });
  }

  selectedUseCaseChaged(newValue: UseCaseType): void {
    console.log(newValue);

    switch (newValue) {
      case UseCaseType.Product:
        this.headerTitle = 'Products';
        break;
      case UseCaseType.Rating:
        this.headerTitle = 'Ratings';
        break;
      case UseCaseType.User:
        this.headerTitle = 'Users';
        break;
    }

    this.selectedUseCase = newValue;
  }

  search(text: string): void {
    this.searchTerms.next(text);
  }

  imageClicked(index: number): void {
    console.log(index);
    this.setHighlighted(index);
    switch (index) {
      case 0:
        this.selectedUseCase = UseCaseType.Product;
        this.headerTitle = 'Products';
        break;
      case 1:
        this.selectedUseCase = UseCaseType.Rating;
        this.headerTitle = 'Ratings';
        break;
      case 2:
        this.selectedUseCase = UseCaseType.User;
        this.headerTitle = 'Users';
        break;
    }
  }

  private setHighlighted(index: number): void {
    this.productColor = (index === 0) ? this.kLightBlueColor : this.kBlackColor;
    this.starColor = (index === 1) ? this.kLightBlueColor : this.kBlackColor;
    this.userColor = (index === 2) ? this.kLightBlueColor : this.kBlackColor;
  }
}
