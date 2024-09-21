import { Component } from '@angular/core';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  
  //*ngIf=true, o false
 
  productos:any[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio":2000,
      "Year":2023,
      "Marca":"NISSAN",
      "Color":"Azul",
      "ImagenUrl":"https://w7.pngwing.com/pngs/299/143/png-transparent-2018-nissan-sentra-car-2017-nissan-sentra-sv-vehicle-nissan-compact-car-sedan-car.png"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio":150000,
      "Year":2020,
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenUrl":"https://e7.pngegg.com/pngimages/149/836/png-clipart-kia-motors-car-2017-kia-rio-2005-kia-rio-kia-compact-car-sedan.png"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio":150000,
      "Year":2020,
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenUrl":"https://e7.pngegg.com/pngimages/149/836/png-clipart-kia-motors-car-2017-kia-rio-2005-kia-rio-kia-compact-car-sedan.png"
    }
  ]
 
}
 