import { Injectable } from '@angular/core';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  url = 'http://localhost:3000/locations';

  constructor() { }

  async getAllReviewsById(id: number) : Promise<Review | undefined> {
    const data = await fetch(`${this.url}/book/reviews/${id}`);
    return await data.json() ?? {};
  }

  submitReview(revTitle: string, revText: string, revValue: number) {
    console.log(revTitle, revText, revValue);
    //TODO: add review to db
  }
}
