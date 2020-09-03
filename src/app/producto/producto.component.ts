import { Component, OnInit } from '@angular/core';
//Para la utilizacion de FormGroup y sus FormContril con sus validaciones
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

   // Definir formulario con los mismos datos del arvcchovo html
   formproducto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    referencia: new FormControl('', [Validators.required, Validators.minLength(4)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(8)]),
    precio: new FormControl('', [Validators.required, Validators.minLength(5)]),
    existencia: new FormControl('', [Validators.required, Validators.minLength(1)]),
   
  });
  constructor() { }

  getDatos(): void {
    console.log(this.formproducto.value);
  }

  ngOnInit(): void {
  }

  guardar(event: Event): void {
    // cancelar el evento predeterminado para que no haga postback (recarga de toda la página) por ser una SPA
    event.preventDefault();
    // validar que los datos del formulario sean válidos
    if (this.formproducto.valid)
    {
      const datosproducto = this.formproducto.value;
      console.log(datosproducto);
    }
    else
    {
      // se utiliza para permitir al usuario tener el botón submit activado y quitar la [disabled]="formusuario.invalid"
      this.formproducto.markAllAsTouched();
    }

  }

}
