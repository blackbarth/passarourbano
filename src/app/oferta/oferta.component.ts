import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
// import { Observable } from 'rxjs';
import { Observable, Observer, Subscription } from 'rxjs';



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  private tempoObservableSubscription: Subscription;
  private meuObservableTesteSubscription: Subscription;
  public oferta: Oferta;


  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {

  }
  ngOnDestroy(): void {
    this.meuObservableTesteSubscription.unsubscribe();
    this.tempoObservableSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      });


    //Primeiro exemplo observable com interval
    // let tempo = new Observable<string>(observer => {
    //   setInterval(() => observer.next(new Date().toString()), 2000);


    // });
    // this.tempoObservableSubscription =  tempo.subscribe((intervalo) => {
    //   console.log(intervalo);
    // });



    //Segundo Exemplo
    //observable (observavel)
    let meuObservableTeste = new Observable((observer: Observer<string>) => {
      observer.next('Primeiro evento da stream');
      observer.next('Segundo evento da stream');
      observer.next('Terceiro evento da stream');
      observer.next('Quarto evento da stream');

      //exemplo de erro
      //observer.error('Algum erro foi encontrado na stream de eventos');

      //exemple de complete
      observer.complete();
    });


    //observable (observador)
    this.meuObservableTeste = meuObservableTeste.subscribe(
      (resultado: any) => { console.log(resultado); },
      (erro: string) => console.log(erro),
      () => console.log('Stream de eventos foi finalizada')
    )



  }



}
