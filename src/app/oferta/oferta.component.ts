import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {
  public oferta: Oferta;


  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {

  }

  ngOnInit(): void {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      });



    let tempo = new Observable<string>(observer => {
      setInterval(() => observer.next(new Date().toString()), 2000);


    });
    tempo.subscribe((intervalo) => {
      console.log(intervalo);
    });
  }



}
