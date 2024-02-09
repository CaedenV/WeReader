import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReviewsService } from '../../../reviews.service';

@Component({
  selector: 'app-make-review',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './make-review.component.html',
  styleUrl: './make-review.component.css'
})
export class MakeReviewComponent {
  reviewService = inject(ReviewsService);
  reviewForm = new FormGroup({
    revTitle: new FormControl(''),
    revText: new FormControl(''),
    revValue: new FormControl(1),
  });


  handleSubmit() {
    this.reviewService.submitReview(
      this.reviewForm.value.revTitle ?? '',
      this.reviewForm.value.revText ?? '',
      this.reviewForm.value.revValue ?? 1
    );
    this.reviewForm.value.revTitle = '';
    this.reviewForm.value.revText = '';
    this.reviewForm.value.revValue = 1;
  }
}
