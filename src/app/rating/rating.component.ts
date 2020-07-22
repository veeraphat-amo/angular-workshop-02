import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {

  @Input() rating: number;

  starWidth: number;

  constructor() { }

  ngOnChanges(): void {
    console.log(this.rating);
    this.starWidth = (75/5) * this.rating;
  }

}
