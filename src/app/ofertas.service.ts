
import { Oferta } from './shared/oferta.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from './app.api';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';



@Injectable()
export class OfertasService {
  private url_api = `${URL_API}/ofertas`;

  constructor(private http: HttpClient) { }




  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((resposta: any) => {
        return resposta;
      });

  }
  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta;
      });
  }


  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas/${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta;
      });
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/como-usar?${id}`)
      .toPromise()
      .then((resposta: any) => {
        console.log(resposta[0].descricao);
        return resposta[0].descricao;
      });
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/onde-fica?${id}`)
      .toPromise()
      .then((resposta: any) => {
        console.log(resposta[0].descricao);
        return resposta[0].descricao;
      });
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
      .pipe(
        retry(10),
        map((resposta: any) => resposta)
      );

  }

}
