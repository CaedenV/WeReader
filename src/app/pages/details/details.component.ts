import { Component, Input } from '@angular/core';
import { WishBtnComponent } from '../../parts/AddToLists/wish-btn/wish-btn.component';
import { OwnBtnComponent } from '../../parts/AddToLists/own-btn/own-btn.component';
import { FavBtnComponent } from '../../parts/AddToLists/fav-btn/fav-btn.component';
import { Book } from '../../book';
import { User } from '../../user';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShowReviewComponent } from '../../parts/Reviews/show-review/show-review.component';
import { MakeReviewComponent } from '../../parts/Reviews/make-review/make-review.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, CommonModule, WishBtnComponent, OwnBtnComponent, FavBtnComponent,
  ShowReviewComponent, MakeReviewComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() user!: User;
  @Input() book!: Book;
}
