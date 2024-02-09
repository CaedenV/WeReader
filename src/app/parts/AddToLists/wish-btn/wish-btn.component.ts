import { Component, Input } from '@angular/core';
import { Book } from '../../../book';
import { User } from '../../../user';

@Component({
  selector: 'app-wish-btn',
  standalone: true,
  imports: [],
  templateUrl: './wish-btn.component.html',
  styleUrl: '../addBtn.css'
})
export class WishBtnComponent {
  @Input() user!: User;
  @Input() book!: Book;

  wishClick() {
    
  }
}
