import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string  = "http://localhost:3000/Users";

  createUser(user: any){
    return this.http.post(this.url,user);
  }
  updateUser(){

  }
  getUsers()
  {
    return this.http.get<Users[]>(this.url);
  }
  

}