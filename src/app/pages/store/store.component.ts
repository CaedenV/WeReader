import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../books.service';
import { Book } from '../../book';
import { BookDescComponent } from '../../parts/BookPreviews/book-desc/book-desc.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [BookDescComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  bookList: Book[] = [];
  bookService: BooksService = inject(BooksService);
  filteredBookList: Book[] = [];

  constructor() {
    const sType = String(this.route.snapshot.params["sType"]);
    const sParam = String(this.route.snapshot.params["sParam"]);
    this.bookService.getAllBooks().then((bookList: Book[]) => {
      this.bookList = bookList;
      this.filteredBookList = bookList;
    });
  }

  filterResults(text: string, cat: string) {
    if (!text) this.filteredBookList = this.bookList;

    if (cat == "genre") {
      this.filteredBookList = this.bookList.filter(
        bookList => bookList?.genre.toLowerCase().includes(text.toLowerCase())
      );
    }
    else if (cat == "author") {
      this.filteredBookList = this.bookList.filter(
        bookList => bookList?.author.toLowerCase().includes(text.toLowerCase())
      );
    }
    else {
      this.filteredBookList = this.bookList.filter(
        bookList => bookList?.title.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
}
