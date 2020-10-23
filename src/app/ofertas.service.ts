
import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from './app.api';


@Injectable()
export class OfertasService {
  private url_api = `${URL_API}/ofertas`;

  constructor(private http: HttpClient) { }




  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${this.url_api}?destaque=true`)
      .toPromise()
      .then((resposta: any) => {
        return resposta;
      });

  }
  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${this.url_api}?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta;
      });
  }


  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${this.url_api}/${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta;
      });
  }

}
