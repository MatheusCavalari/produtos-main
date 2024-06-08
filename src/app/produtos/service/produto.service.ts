import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/core/material/types/produto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl: string = environment.apiProdutoUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  listar () : Observable<any[]> {
    console.log(
     this.httpClient.get<any[]>(`${this.apiUrl}/v1/cliente`));
    return this.httpClient.get<any[]>(`${this.apiUrl}/v1/cliente`);
    }

}
