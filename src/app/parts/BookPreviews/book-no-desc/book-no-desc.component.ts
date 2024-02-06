import { Component, Input } from '@angular/core';
import { WishBtnComponent } from '../../AddToLists/wish-btn/wish-btn.component';
import { OwnBtnComponent } from '../../AddToLists/own-btn/own-btn.component';
import { FavBtnComponent } from '../../AddToLists/fav-btn/fav-btn.component';
import { Book } from '../../../book';
import { User } from '../../../user';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-no-desc',
  standalone: true,
  imports: [WishBtnComponent, FavBtnComponent, OwnBtnComponent, RouterModule, CommonModule],
  templateUrl: './book-no-desc.component.html',
  styleUrl: './book-no-desc.component.css'
})
export class BookNoDescComponent {
  @Input() book!: Book;
  @Input() user!: User;
}
