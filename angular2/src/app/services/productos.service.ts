import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Pedido} from "../producto/Pedido";
import {Producto} from "../models/Producto";
import 'rxjs/Rx';

@Injectable()
export class ProductosService {

  constructor(private http: Http) { }

  obtenerProductos(){
    return this.http.get("https://tienda-46746.firebaseio.com/productos/.json")
      .map((res: Response) => {
      	console.log(res.json());
      	return res.json();
      });
  }
  obtenerProductoPorId(id:number){
    return this.http.get("https://tienda-46746.firebaseio.com/productos/"+ (id) + "/.json")
      .map((res: Response) => res.json());
  }

   // sendDatos(pedido: any){
   //   const datos = JSON.parse(JSON.stringify(pedido);
   //   return this.http.post("https://tienda-46746.firebaseio.com/pedidos/.json", datos)
   //    .map((res: Response) => res.json());
   //   }
}
