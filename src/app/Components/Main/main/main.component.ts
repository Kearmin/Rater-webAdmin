import { UseCaseType } from '../../../Common/UseCaseType';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  selectedUseCase: UseCaseType;

  constructor() { }

  ngOnInit(): void {
    this.selectedUseCase = UseCaseType.Product;
  }

  selectedUseCaseChaged(newValue: UseCaseType): void {
    console.log(newValue);
    this.selectedUseCase = newValue;
  }
}
