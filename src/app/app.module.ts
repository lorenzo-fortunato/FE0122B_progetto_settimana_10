import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { DettagliProdottoComponent } from './dettagli-prodotto/dettagli-prodotto.component';

import { AppComponent } from './app.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrelloComponent } from './carrello/carrello.component';

const routes: Route[] = [
  { path: '', component: ProdottiComponent },
  { path: 'dettagli', component: DettagliProdottoComponent },
  { path: 'carrello', component: CarrelloComponent }




]

@NgModule({
  declarations: [
    AppComponent,
    ProdottiComponent,
    DettagliProdottoComponent,
    NavbarComponent,
    CarrelloComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
