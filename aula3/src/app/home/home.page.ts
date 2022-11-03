import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CidadesService } from '../cidades.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  cidades: object;

  constructor(
    private router: Router,
    private cidadesService: CidadesService,

  ) {
    this.cidades = [];
  }

  goToPage(event) {
   this.router.navigate(['/cidade'], { state: { cidade: event.target.value}});
  }

  ngOnInit() {

    const regiao = history.state.regiao;
    console.log(regiao);

    this.cidadesService.obterCidadePorRegiao(regiao).subscribe((data) => {
      this.cidades = data;
      console.log(this.cidades);
    });

    // this.cidadesService.obterTodasCidades().subscribe( data => {
    //   this.cidades = data;
    //   console.log(this.cidades);
    // })
  }

}
