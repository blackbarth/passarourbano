import { Component, OnInit } from '@angular/core';
import { Observable, Subject, EMPTY, from, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {
  private subjectPesquisa: Subject<string> = new Subject();
  public ofertas: Observable<Oferta[]>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: string) => {
        if (termo.trim() === '') {

          // const o = of<Oferta[]>();
          const o = of<Oferta[]>([]);
          // return Observable.of<Oferta[]>([]); // original
          // return new Observable<Oferta[]>();
          return o;

        }
        return this.ofertasService.pesquisaOfertas(termo);
      }),
      catchError(error => {
        const o = of<Oferta[]>([]);
        return o;
      })

    );

    // this.ofertas.subscribe((ofertas: Oferta[]) => {
    //       this.ofertas2 = ofertas;
    // })

  }

  // captura por event
  // public pesquisa(event: Event): void {
  //   console.log((<HTMLInputElement>event.target).value);
  // }
  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca);
  }

  public limpaPesquisa(): void {
    console.log('Limpa Pesquisa');
    this.subjectPesquisa.next('');
  }
}
