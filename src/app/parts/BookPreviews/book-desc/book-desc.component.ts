import { Component, Input } from '@angular/core';
import { Book } from '../../../book';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../../user';
import { FavBtnComponent } from '../../AddToLists/fav-btn/fav-btn.component';
import { OwnBtnComponent } from '../../AddToLists/own-btn/own-btn.component';
import { WishBtnComponent } from '../../AddToLists/wish-btn/wish-btn.component';

@Component({
  selector: 'app-book-desc',
  standalone: true,
  imports: [CommonModule, RouterModule, WishBtnComponent, FavBtnComponent, OwnBtnComponent],
  templateUrl: './book-desc.component.html',
  styleUrl: './book-desc.component.css'
})
export class BookDescComponent {
  @Input() book!: Book;
  @Input() user!: User;
}
