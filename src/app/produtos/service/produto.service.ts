import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/core/types/produto';
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
    return this.httpClient.get<PaginatedResponse<Produto>>(`${this.apiUrl}/v1/produtos/paginados?page=${page}&size=${size}`);
  }

  getProdutoById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/v1/produto/${id}`);
  }


  cadastrarProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(`${this.apiUrl}/v1/produto`, produto);
  }

}
