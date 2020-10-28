import { Injectable } from '@angular/core';
import { Pedido } from '../shared/pedido.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from '../app.api';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class OrdemCompraService {


  private url_API = `${URL_API}/pedidos`;
  constructor(private http: HttpClient) {

  }

  public efetivarCompra(pedido: Pedido): Observable<Pedido> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(pedido);

    return this.http.post<Pedido>(this.url_API , body, { headers: headers })
      .pipe(
        map((resposta) => {
          console.log(resposta);
          return resposta;
        }),
        catchError((err) => {
          console.error(err);
          throw err;
        }
        ));
  }


}
