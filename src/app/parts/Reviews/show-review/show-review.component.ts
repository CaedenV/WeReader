import { Component, Input } from '@angular/core';
import { Review } from '../../../review';

@Component({
  selector: 'app-show-review',
  standalone: true,
  imports: [],
  templateUrl: './show-review.component.html',
  styleUrl: './show-review.component.css'
})
export class ShowReviewComponent {
  @Input() rev!: Review;
}
