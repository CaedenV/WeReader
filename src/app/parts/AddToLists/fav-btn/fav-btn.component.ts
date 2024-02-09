import { Component, Input } from '@angular/core';
import { Book } from '../../../book';
import { User } from '../../../user';

@Component({
  selector: 'app-fav-btn',
  standalone: true,
  imports: [],
  templateUrl: './fav-btn.component.html',
  styleUrl: '../addBtn.css'
})
export class FavBtnComponent {
  @Input() user!: User;
  @Input() book!: Book;
  
  favClick() {

  }
}
