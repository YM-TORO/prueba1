import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  nombreempresa = "Desarrollo paisa";
  direccionempresa= "calle 10 #10-10";
  cupocredito =5000000;
  constructor() { }

  ngOnInit(): void {
  }

}
