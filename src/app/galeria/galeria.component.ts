import { Component, OnInit } from '@angular/core';
import {APIService} from './../api.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  title = ' Listado de fotos  - API';
  apiFotos:any []= [];
 // api:any [];

  constructor(private servapi:APIService) { }

  ngOnInit(): void {
    this.servapi.getAPI()
    .subscribe(
      (data)=>{
        this.apiFotos= data [''];
      },
      (error)=>{
        console.error(error);
      }
    );
    //this.contactsService.getContacts.subscribe(data => {this.contacts = data});
  } 
}
