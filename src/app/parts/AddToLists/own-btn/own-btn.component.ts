import { Component, Input } from '@angular/core';
import { Book } from '../../../book';
import { User } from '../../../user';

@Component({
  selector: 'app-own-btn',
  standalone: true,
  imports: [],
  templateUrl: './own-btn.component.html',
  styleUrl: '../addBtn.css'
})
export class OwnBtnComponent {
  @Input() user!: User;
  @Input() book!: Book;

  ownClick() {

  }
}
