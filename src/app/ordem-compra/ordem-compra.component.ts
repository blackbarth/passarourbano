import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdemCompraService } from '../services/ordem-compra.service';
import { Pedido } from '../shared/pedido.models';


@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {
  public idPedidoCompra:number;

  @ViewChild('formulario') public formulario: NgForm;
  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {

  }

  public confirmarCompra(): void {


    let pedido: Pedido = new Pedido(
      this.formulario.value.endereco,
      this.formulario.value.numero,
      this.formulario.value.complemento,
      this.formulario.value.formaPagamento);
    this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((resposta: Pedido) => {
        this.idPedidoCompra = resposta.id;
        console.log('Pedido cadastrado com sucesso! Id do Pedido: ', resposta.id);
      });

  }
}
