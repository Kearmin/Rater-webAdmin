import { UseCaseType } from './../../../Common/UseCaseType';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  productCase = UseCaseType.Product;
  ratingCase = UseCaseType.Rating;
  userCase = UseCaseType.User;

  @Input() selectedUseCase: UseCaseType;
  @Output() selectedUseCaseChange = new EventEmitter<UseCaseType>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(newUseCase: UseCaseType): void {
    this.selectedUseCase = newUseCase;
    this.selectedUseCaseChange.emit(newUseCase);
  }
}
