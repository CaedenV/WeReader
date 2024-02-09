import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url = 'https://localhost:3000/locations';

  constructor() { }

  async getAllBooks() : Promise<Book[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  async getBooksByGenre(genre: string):Promise<Book | undefined> {
    const data = await fetch(`${this.url}/${genre}`);
    return await data.json() ?? {};
  }
  async getBooksByTitle(title: string):Promise<Book | undefined> {
    const data = await fetch(`${this.url}/${title}`);
    return await data.json() ?? {};
  }
  async getBooksByAuthor(author: string):Promise<Book | undefined> {
    const data = await fetch(`${this.url}/${author}`);
    return await data.json() ?? {};
  }
}
