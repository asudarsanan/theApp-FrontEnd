import { HttpClient, HttpHeaders ,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , throwError } from 'rxjs';
import {catchError, retry } from 'rxjs/operators';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  url!: string;

  constructor(private http: HttpClient) { 
  }
  login(user: User): Observable<User>{
    let user1!: User;
    console.log(user.username);
    console.log(user.password);
    user1=user;
    this.url='http://localhost:8081/user/login';
    return this.http.post<User>(this.url,user,this.httpOptions)
    .pipe(
      catchError(this.handleError)
      );
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err)
    let errMsg:string='';
    if (err.error instanceof Error) {
      errMsg=err.error.message;
      console.log(errMsg)
    }
    else if ( typeof err.error === 'string'){
      errMsg=JSON.parse(err.error).message
    }
    else {
      if(err.status==0){
        errMsg="A connection to backend cannot be established"
      }else {
        errMsg=err.error.message;
      }

    }
      return throwError(errMsg);

  }
}
