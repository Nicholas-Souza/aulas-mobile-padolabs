import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CidadesService {

  constructor(private http:HttpClient) { }

  obterTodasCidades(): Observable<object> {
     const url = 'http://172.16.107.82:8080/regions/all';
     return this.http.get(url);
  }

  obterCidadePorRegiao(regiao): Observable<object> {
    console.log(`região em cidades.service.ts: ${regiao}`);
    const url = `http://172.16.107.82:8080/regions/${regiao}`;
    return this.http.get(url);
  }
}
