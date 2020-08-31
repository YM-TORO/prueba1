import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  producto: any[] = [
    {
      referencia: '01',
      descripcion: 'Tv 65',
      precio: 2500000
    },
    {
      referencia: '04',
      descripcion: 'Nevera 12 p',
      precio: 1500000
    },
    {
      referencia: '06',
      descripcion: 'Estufa 4 puestos',
      precio: 1200000
    },
    {
      referencia: '08',
      descripcion: 'Consola de viodeo juegos',
      precio: 1300000
    }
  ];

  constructor() { 
    //console.log('El servicio de producto esta funcionando');
  }

  getProductos(){
    return this.producto;
  }
  
}

 