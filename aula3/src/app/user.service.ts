import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  userLogin(data: any): Observable<object> {
    const url = 'http://localhost:3000/login';
    return this.http.post(url, data);
    /* return this.http.post('http://localhost:3000/login', data); */
  }

  userRegister(data: any): Observable<object> {
    const url = 'http://localhost:3000/register';
    return this.http.post(url, data);
  }

}
