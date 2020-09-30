import { RatingService } from './../../Services/rating.service';
import { Rating } from './../../Common/Product';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail-rating',
  templateUrl: './detail-rating.component.html',
  styleUrls: ['./detail-rating.component.scss']
})
export class DetailRatingComponent implements OnInit, AfterViewInit {

  ratings$: Observable<Rating[]>;
  @Input() searchTerms: Subject<string>;

  constructor(private ratingService: RatingService) { }

  ngOnInit(): void {
    this.ratings$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.ratingService.getProducts(term))
    );
  }

  ngAfterViewInit(): void {
    this.searchTerms.next();
  }
}
