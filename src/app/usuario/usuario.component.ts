import { Component, OnInit } from '@angular/core';
//Para la utilizacion de FormGroup y sus FormContril con sus validaciones
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  // Definir formulario con los mismos datos del arvcchovo html
  formusuario = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.minLength(4)]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    rol: new FormControl('', [Validators.required]),
    clave: new FormControl('', [Validators.required, Validators.minLength(6)]),
    genero: new FormControl('', [Validators.required])
  });
  constructor() { }

  getDatos(): void {
    console.log(this.formusuario.value);
  }

  ngOnInit(): void {
  }
   
  get emailfield()
  /* y cambiar este método en la validación en el archivo html con
  "formusuario.get('email').errors && formusuario.get('email').touched
  por:
  <div *ngIf="emailfield.errors && emailfield.touched">
      <small id="usuarioHelp" class="text-danger" *ngIf="emailfield.hasError('required')">El email es obligatorio </small>
    </div>*/
  {
    return this.formusuario.get('email');
  }

  guardar(event: Event): void {
    // cancelar el evento predeterminado para que no haga postback (recarga de toda la página) por ser una SPA
    event.preventDefault();
    // validar que los datos del formulario sean válidos
    if (this.formusuario.valid)
    {
      const datosusuario = this.formusuario.value;
      console.log(datosusuario);
    }
    else
    {
      // se utiliza para permitir al usuario tener el botón submit activado y quitar la [disabled]="formusuario.invalid"
      this.formusuario.markAllAsTouched();
    }

  }
}
