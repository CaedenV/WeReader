import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:3000/locations';
  constructor() { }

  submitLoginInfo(userName: string, password:string): String {
    //TODO: check if userName exists, error if not. else, check pw matches in db.
    return "Account not found."
  }
  submitRegisterInfo(userName: string, password: string): String {
    //TODO: check if info already exists in db, then add if not
    return "Account Registered."
  }

  async getUserLibraries(userId: number, library: string): Promise<Book | undefined> {
    const data = await fetch(`${this.url}/${userId}/${library}`);
    return await data.json() ?? {};
  }
}
