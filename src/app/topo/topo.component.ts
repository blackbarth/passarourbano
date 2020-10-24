import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //captura por event
  // public pesquisa(event: Event): void {
  //   console.log((<HTMLInputElement>event.target).value);
  // }
  public pesquisa(termoDaBusca: string): void {
    console.log(termoDaBusca);
  }
}
