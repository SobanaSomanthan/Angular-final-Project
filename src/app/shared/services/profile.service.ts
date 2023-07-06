import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  httpOptions:any;
  constructor(private http:HttpClient) { }
  getProfile():Observable<any>{
    return this.http.get("http://localhost:4500/users")
  }

  postProfile(obj:any):Observable<any>{
    this.httpOptions = new HttpHeaders({
      'Content-Type':'application/json',
    })
    return this.http.post("http://localhost:4500/users",obj,this.httpOptions)
  }
  isCurrentUser(email: string): Observable<boolean> {
    return this.getProfile().pipe(
      map((users: any[]) => {
        const currentUser = users.find(user => user.email === email);
        return !!currentUser;
      })
    );
}}
