import { UseCaseType } from '../../../Common/UseCaseType';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  selectedUseCase: UseCaseType;
  searchTerms = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.selectedUseCase = UseCaseType.Product;
  }

  selectedUseCaseChaged(newValue: UseCaseType): void {
    console.log(newValue);
    this.selectedUseCase = newValue;
  }

  search(text: string): void {
    this.searchTerms.next(text);
  }
}
