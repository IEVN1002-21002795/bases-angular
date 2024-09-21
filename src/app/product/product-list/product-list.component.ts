import { Component } from '@angular/core';
import { IProductos } from '../productos';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  
  //*ngIf=true, o false

  imageWidht:number=60;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string=''

  muestImg():void{
    this.muestraImg = !this.muestraImg;
  }
  //class="w-25"><img src="{{producto.ImagenUrl}}" alt="" class="w-50">
 
  productos:IProductos[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio":2000,
      "Year":"marzo 18 2023",
      "Marca":"NISSAN",
      "Color":"Azul",
      "ImagenUrl":"https://w7.pngwing.com/pngs/299/143/png-transparent-2018-nissan-sentra-car-2017-nissan-sentra-sv-vehicle-nissan-compact-car-sedan-car.png"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio":150000,
      "Year":"septiembre 5 2014",
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenUrl":"https://e7.pngegg.com/pngimages/149/836/png-clipart-kia-motors-car-2017-kia-rio-2005-kia-rio-kia-compact-car-sedan.png"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio":150000,
      "Year":"april 12 2018",
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenUrl":"https://e7.pngegg.com/pngimages/149/836/png-clipart-kia-motors-car-2017-kia-rio-2005-kia-rio-kia-compact-car-sedan.png"
    }
  ]
 
}
 