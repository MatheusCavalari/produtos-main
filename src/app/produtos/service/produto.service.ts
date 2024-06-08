import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/core/material/types/produto';
import { environment } from 'src/environments/environment';
import { PaginatedResponse } from '../produto/produto.component';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl: string = environment.apiProdutoUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  listar (page: number, size: number) :  Observable<PaginatedResponse<Produto>> {
    console.log(
     this.httpClient.get<any[]>(`${this.apiUrl}/v1/produtos/paginados?page=${page}&size=${size}`));
    return this.httpClient.get<PaginatedResponse<Produto>>(`${this.apiUrl}/v1/produtos/paginados?page=${page}&size=${size}`);
  }

  getProdutoById(id: string): Observable<any> {
    console.log(id);
    console.log(
      this.httpClient.get<any>(`${this.apiUrl}/v1/produto/${id}`));
    return this.httpClient.get<any>(`${this.apiUrl}/v1/produto/${id}`);
  }

}
