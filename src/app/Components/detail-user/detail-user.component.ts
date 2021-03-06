import { UserService } from './../../Services/user.service';
import { User } from './../../Common/Product';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit, AfterViewInit {

  users$: Observable<User[]>;
  @Input() searchTerms: Subject<string>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term: string) => this.userService.getUsers(term))
    );
  }

  ngAfterViewInit(): void {
    this.searchTerms.next('');
  }

  onDeleteClick(id: number): void {
    this.userService.deleteUser(id).subscribe( _ => {
      console.log('deleted user with id: ' + id);
      this.searchTerms.next('');
    });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
