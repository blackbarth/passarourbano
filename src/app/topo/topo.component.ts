import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { OfertasService } from '../ofertas.service';
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
      switchMap((termo: string) => {
        console.log('requisicao http para a api', termo);
        return this.ofertasService.pesquisaOfertas(termo);
      }),

    )
    this.ofertas.subscribe((ofertas: Oferta[]) => {
      console.log(ofertas);
    })

  }

  // captura por event
  // public pesquisa(event: Event): void {
  //   console.log((<HTMLInputElement>event.target).value);
  // }
  public pesquisa(termoDaBusca: string): void {
    console.log('keyup caracter', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);


  }
}
