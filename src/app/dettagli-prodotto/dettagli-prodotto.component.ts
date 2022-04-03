import { Component, OnInit } from '@angular/core';
import { InterfacciaProdotti } from '../models/interfaccia-prodotti';
import { ProdottiServiceService } from '../service/prodotti-service.service';

@Component({
  selector: 'app-dettagli-prodotto',
  templateUrl: './dettagli-prodotto.component.html',
  styleUrls: ['./dettagli-prodotto.component.scss']
})

export class DettagliProdottoComponent implements OnInit {
  arrTelefoni!: InterfacciaProdotti[];
  // prodottoId!: InterfacciaProdotti;
  // prodottoArrivato: InterfacciaProdotti[] | any =

  constructor(private ProductSrv: ProdottiServiceService) { }

  ngOnInit(): void {
    this.ProductSrv.caricaProdotti().subscribe((listaTelefoni) => {
      this.arrTelefoni = listaTelefoni

      console.log(this.arrTelefoni)
    })


  }
















  // getID(id: number) {
  // let prodottoId = this.arrTelefoni.find(x => x.id === id);
  // console.log(prodottoId)
  // // let prova = this.arrProduct.push(prodottoId)
  // // console.log(prova)
  // }

}


