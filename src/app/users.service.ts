import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:3306/user';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  submitLoginInfo(userName: string, password: string) {
    const data = fetch(`${this.url}/login`, {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' }
    });
    data.then(response => {
      if (response.ok) {
        return response.json() as Promise<{ token: string }>;
      } else {
        throw new Error('Login failed');
      }
    });
  }

  submitRegisterInfo(userName: string, password: string) {
    // Send register request to the server
    const body = { userName, password };
    return this.http.post(`${this.url}/register`, body)
      .toPromise()
      .then(response => {
        // Return the success message to the client
        return 'Account Registered';
      })
      .catch(error => {
        // Handle error
        return error;
      });
  }

  async getUserLibraries(userId: number, library: string) {
    // Send request to the server to get user libraries
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    const url = `${this.url}/${userId}/${library}`;
    const response = await this.http.get(url, { headers });
    return await response ?? {};
  }
}