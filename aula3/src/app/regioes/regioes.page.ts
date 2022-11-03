import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regioes',
  templateUrl: './regioes.page.html',
  styleUrls: ['./regioes.page.scss'],
})
export class RegioesPage implements OnInit {


  private regioes: Regioes[] = [
    {
      name: "Sul",
      imgUrl: 'https://www.litoralverde.com.br/img/uploads/acomodacao_hotel/cataratas-compressed_1528219636.jpg'
    },
    {
      name: "Norte",
      imgUrl: 'https://rodoviariaonline.com.br/wp-content/uploads/2018/08/tudo-sobre-aregiao-sudeste-o-que-voce-precisa-saber-3.jpg'
    },
    {
      name: "Sudeste",
      imgUrl: 'https://www.litoralverde.com.br/img/uploads/acomodacao_hotel/cataratas-compressed_1528219636.jpg'
    }

  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goToPage(regiao) {
    this.router.navigate(['/cidades'], { state: { regiao: regiao.name}});
  }

  protected getRegioes(): Regioes[] {
    return this.regioes;
  }


}

interface TabsCustomEvent extends CustomEvent {
  detail: { tab: string };
  target: HTMLIonTabsElement;
}

interface Regioes {
  name: string;
  imgUrl: string;
}
