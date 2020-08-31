import { Component, OnInit } from '@angular/core';
import {UserService} from './../user.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {
  title = ' Listado de usuarios de Random User - API';
  users:any []= [];

  constructor( private servusers:UserService) { }

  ngOnInit(): void {
    this.servusers.getUsers()
    .subscribe(
      (data)=> {//success
        this.users = data['results']; //results es el array de los datos en formato jason
      },
      (error)=>{
        console.error(error);
      }
    );
  }
}
