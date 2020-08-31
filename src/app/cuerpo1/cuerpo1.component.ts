import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo1',
  templateUrl: './cuerpo1.component.html',
  styleUrls: ['./cuerpo1.component.css']
})
export class Cuerpo1Component implements OnInit {
  mostrar:boolean = true;
  nroveces:number = 0;
  valor:number = 2;
  deptos= ['Cundinamarca', 'Antioquia','Caldas', 'Valle','Amazonas'];
  persona:any[]=[
    {
      nombre:"Teresa Valencia",
      edad:59,
      ciudad:"MC"
    },
    {
      nombre:"Faustino Zapata",
      edad:98,
      ciudad:"SJ"
    },
    {
      nombre:"Otilia Zapata",
      edad:48,
      ciudad:"CC"
    },
    {
      nombre:"Walter Rodas",
      edad:41,
      ciudad:"PB"
    },
    {
      nombre:"Walter Montoya",
      edad:30,
      ciudad:"Medellin"
    }
    ];
  
  constructor() { }

  clickear(){
    this.nroveces++;
  }

  ngOnInit(): void {
  }

}
