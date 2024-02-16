import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost8080';

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(this.url +
      "/users/login", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    });
  }

  getUserLibraries(userId:number) {
    // return this.http.get(this.url +
    //   "/users/login", data, {
    //   headers: new HttpHeaders().set('Content-Type', "application/json")
    // });
  }
}