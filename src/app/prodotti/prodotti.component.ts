import { Component, Input, OnInit } from '@angular/core';
import { InterfacciaProdotti } from 'src/app/models/interfaccia-prodotti';
import { ProdottiServiceService } from 'src/app/service/prodotti-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.scss']
})
export class ProdottiComponent implements OnInit {
  sub!: Subscription;
  prodotti!: InterfacciaProdotti[] | any;
  arrProduct: InterfacciaProdotti[] = [];


  constructor(private ProductSrv: ProdottiServiceService, private router: Router) { }

  ngOnInit(): void {
    this.ProductSrv.caricaProdotti().subscribe((listaProdotti) => {
      this.prodotti = listaProdotti

    })
  }

  urca(id: number) {
    return this.ProductSrv.caricaDettaglio(id)
  }



  // getID(id: number) {
  //   let prodottoId: any = this.prodotti.find(x => x.id === id);
  //   console.log(prodottoId)
  //   let prova = this.arrProduct.push(prodottoId)
  //   console.log(prova)
  //   console.log(this.arrProduct)
  // }

  // ottieni(): InterfacciaProdotti[] {
  //   return this.arrProduct;
  // }





//  dettagliProdotto(prodotto: InterfacciaProdotti) {
//      this.router.navigate(['/dettagli']);
//     //  this.ProductSrv.caricaDettaglio(prodotto);
//     // console.log(this.ProductSrv.arrProdotti)
//   }


}

