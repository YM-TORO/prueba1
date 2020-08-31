import { Component, OnInit } from '@angular/core';
import {ProductoService} from './../producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls:['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  mproducto:any []= [];

  constructor(private servProd: ProductoService) { 
    this.mproducto= servProd.getProductos();
  }

  ngOnInit(): void {
  }

}
