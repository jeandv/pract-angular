import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})

export class AppComponent {
  title: string = 'desafio-2';

  imagesBanner = ['banner1', 'banner2', 'banner3', 'banner4', 'banner5'].map((n) => `../assets/images/${n}.webp`);
  imagesProductos = ['reloj', 'tv', 'secador', 'usb', 'bajo'].map((n) => `../assets/images/${n}.webp`);

  datosProductos =
    [
      {
        id: 1,
        titulo: 'Reloj Inteligente Smart Band X9 Sport Fit Cardiaco Calorias',
        precio: 15,
        tipoEnvio: 'Envío gratis',
        imagen: `${this.imagesProductos[0]}`
      },
      {
        id: 2,
        titulo: 'Televisor Daewoo 58 Uhd Smart 4k Android 9.0 Isdbt',
        precio: 479,
        tipoEnvio: 'Envío gratis',
        imagen: `${this.imagesProductos[1]}`
      },
      {
        id: 3,
        titulo: 'Secador De Cabello Infinitipro Conair',
        precio: 41,
        tipoEnvio: 'Envío gratis',
        imagen: `${this.imagesProductos[2]}`
      },
      {
        id: 4,
        titulo: 'Tarjeta Red Usb Adaptador Micro Wifi 300mb Tp-link Mercusys',
        precio: 20,
        tipoEnvio: 'Envío gratis',
        imagen: `${this.imagesProductos[3]}`
      },
      {
        id: 5,
        titulo: 'Bajo 10 Power Bass Doble Bobina 1500w 4 Ohm',
        precio: 99,
        tipoEnvio: 'Envío gratis',
        imagen: `${this.imagesProductos[4]}`
      }
    ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

}