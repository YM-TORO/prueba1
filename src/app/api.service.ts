import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { 

    
  }
  getAPI(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }
}
