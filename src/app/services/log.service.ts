import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LogService {
  getUser() {
    throw new Error('Method not implemented.');
  }
  httpOptions:any;
  id:string='';
  username:String='';
  usertype:String='';
  token:any='';
  email:any='';
  status:boolean=false;
   constructor(private http:HttpClient) {
       let username=sessionStorage.getItem("username");
       let usertype=sessionStorage.getItem("usertype");
       let token=sessionStorage.getItem("token");
       let email=sessionStorage.getItem("email");
       if(username&&usertype){
         this.status=true;
         this.username=username;
         this.usertype=usertype;
         this.token=token;
         this.email=email;
       }
    }
 getCurrentUserEmail(){
  return this.email;
 }
   getStatus():boolean{
     return this.status;
   }
 
   // To Register a User
   register(obj:any):Observable<object>{
     this.httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'
         })
     }
     return this.http.post("http://localhost:3500/register",obj,this.httpOptions);
   }
 
   //To check avalailability of mail id and username
 
   check(str:any):Observable<object>{
     return this.http.get("http://localhost:3500/users?username"+str,this.httpOptions);
   }
 
 // to Login
   login(email:any,password:any):Observable<object>{
  
     this.httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json',
   
       })
     }
     return this.http.post("http://localhost:3500/login",
     {email:email,password:password},
     this.httpOptions);
   }
 
   logout():void{
      this.token="";
      this.username="";
      this.usertype="";
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("usertype");
      sessionStorage.removeItem("email");
   }
}