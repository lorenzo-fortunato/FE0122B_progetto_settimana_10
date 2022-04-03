import { Injectable } from '@angular/core';
import { InterfacciaProdotti } from '../models/interfaccia-prodotti';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdottiServiceService {
  baseUrl = 'http://localhost:4201/products'

  prodotti!: InterfacciaProdotti[];

  arrProdotti: InterfacciaProdotti[] = [];

  constructor(private http: HttpClient) {
  }


  caricaProdotti() {
    return this.http.get<InterfacciaProdotti[]>(`${this.baseUrl}`);


  }

  caricaDettaglio(id: number) {
    let prodottoId: any = this.prodotti.find(x => x.id === id);
    let prova = this.arrProdotti.push(prodottoId)
    console.log(prova)


  }









  // }
  // ottieni(pippo: InterfacciaProdotti[]){
  //   return this.arrProdotti = pippo
  // }
  // ottieni() {}





  // ottieni(){
  //    return this.arrProdotti
  // }

}

