import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../services/ofertas.service';


// import { Observable } from 'rxjs';
// import { Observable, Observer, Subscription } from 'rxjs';
import { CarrinhoService } from '../services/carrinho.service';



@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  // exemplo de subscription
  // private tempoObservableSubscription: Subscription;
  // private meuObservableTesteSubscription: Subscription;
  public oferta: Oferta;


  constructor(private route: ActivatedRoute, private ofertasService: OfertasService, private carrinhoService: CarrinhoService) {

  }
  ngOnDestroy(): void {
    // exemplo de subscription
    // this.meuObservableTesteSubscription.unsubscribe();
    // this.tempoObservableSubscription.unsubscribe();
  }

  ngOnInit(): void {
       this.route.params.subscribe((parametros: Params) => {
      this.ofertasService.getOfertaPorId(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta;
        });
    });

  }

  /**
   * adicionarItemCarrinho
   */
  public adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.oferta);
    console.log(this.carrinhoService.exibirItens());

  }

}
