import { Component, OnInit } from '@angular/core';
import {FormControl }  from  '@angular/forms';

@Component({
  selector: 'app-navega',
  templateUrl: './navega.component.html',
  styleUrls: ['./navega.component.css']
})
export class NavegaComponent implements OnInit {
  botonnavega= new FormControl ('');
  constructor() { }

  ngOnInit(): void {
  }

}
