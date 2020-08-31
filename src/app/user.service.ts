import { Injectable } from '@angular/core';
// cliente de http
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { 
  }
  
  getUsers(){
    return this.http.get('https://randomuser.me/api/?results=5')
  }
}
