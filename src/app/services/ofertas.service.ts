import { Oferta } from '../shared/oferta.model';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from '../app.api';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';



@Injectable()
export class OfertasService {
  // tslint:disable-next-line: variable-name
  private url_API = `${URL_API}/ofertas`;

  constructor(private http: HttpClient) { }




  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${this.url_API}?destaque=true`)
      .toPromise()
      .then((resposta: any) => {
        return resposta;
      });

  }
  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${this.url_API}?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => {
        console.log(resposta);
        return resposta;
      });
  }


  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${this.url_API}/${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta;
      });
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/como-usar?${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta[0].descricao;
      });
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/onde-fica?${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta[0].descricao;
      });
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get(`${this.url_API}?descricao_oferta_like=${termo}`)
      .pipe(
        retry(10),
        map((resposta: any) => resposta)
      );

  }

}
