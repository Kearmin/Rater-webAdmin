/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailRatingComponent } from './detail-rating.component';

describe('DetailRatingComponent', () => {
  let component: DetailRatingComponent;
  let fixture: ComponentFixture<DetailRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
