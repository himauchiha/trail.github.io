import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient:HttpClient) { }

  getUsers(){
    return this.httpClient.get("http://localhost:8000/getUsers")
           .pipe(map(res => console.log(res)));
  };

  registerUser(newUser){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.httpClient.post("http://localhost:8000/registerNewUser",newUser,{headers:headers})
           .pipe(map(res=>console.log(res)));
  }
}
