import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../services/ordem-compra.service';
import { Pedido } from '../shared/pedido.models';




@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compraOld.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraOldComponent implements OnInit {

  public idPedidoCompra: number;

  // pedido
  public pedido: Pedido = new Pedido('', '', '', '');

  public endereco = '';
  public numero = '';
  public complemento = '';
  public formaPagamento = '';



  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;
  public formEstado = 'disabled';

  // estados primitivos dos campos (pristine)

  public enderecoEstadoPrimitivo = true;
  public numeroEstadoPrimitivo = true;
  public complementoEstadoPrimitivo = true;
  public formaPagamentoEstadoPrimitivo = true;




  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit(): void {
    // this.ordemCompraService.efetivarCompra();
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    this.enderecoEstadoPrimitivo = false;
    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
    this.habilitaForm();
  }
  public atualizaNumero(numero: string): void {
    this.numero = numero;
    this.numeroEstadoPrimitivo = false;
    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
    this.habilitaForm();
  }
  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    this.complementoEstadoPrimitivo = false;
    if (this.complemento.length > 0) { this.complementoValido = true; }
    else { this.complementoValido = false; }
    this.habilitaForm();

  }
  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoEstadoPrimitivo = false;
    if (this.formaPagamento.length > 0 && this.formaPagamento !== 'Selecione uma opção') { this.formaPagamentoValido = true; }
    else { this.formaPagamentoValido = false; }
    this.habilitaForm();
  }

  public habilitaForm(): void {
    if (this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true) {
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }

  }

  public confirmarCompra(): void {
    this.pedido.endereco = this.endereco;
    this.pedido.complemento = this.complemento;
    this.pedido.numero = this.numero;
    this.pedido.formaPagamento = this.formaPagamento;
    console.log('Antes idPedidocompra ' , this.idPedidoCompra)
    this.ordemCompraService.efetivarCompra(this.pedido)
    .subscribe((resposta: any)=>{
      this.idPedidoCompra = resposta.id;
      console.log('Depois idPedidoCompra ',this.idPedidoCompra);
    });
  }

}
