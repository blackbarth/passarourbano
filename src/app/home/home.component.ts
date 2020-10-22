import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    // this.ofertas = this.ofertasService.getOfertas();
    // console.log(this.ofertas);

    //exemplo retorno promise
    // this.ofertasService.getOfertas2()
    //   .then(
    //     (ofertas: Oferta[]) => { this.ofertas = ofertas },
    //     (param: any) => { console.log(param) }
    //   );

    //utilizando catch
    this.ofertasService.getOfertas2()
      .then(
        (ofertas: Oferta[]) => {
          console.log('a funçao resolver() foi resolvida em 3 segundos')
          this.ofertas = ofertas })
      .catch((param: any) => {
        console.log(param);
      });




  }

}
