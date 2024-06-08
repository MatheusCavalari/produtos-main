import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/core/material/types/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  produtos!: Produto[];
  totalPages: number = 0;
  currentPage: number = 0;
  pageSize: number = 10;

  constructor(private servicoProduto: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.loadProdutos(this.currentPage, this.pageSize);
  }

  loadProdutos(page: number, size: number): void {
    this.servicoProduto.listar(page, size)
      .subscribe(
        (resposta: PaginatedResponse<Produto>) => {
          this.produtos = resposta.content;
          this.totalPages = resposta.totalPages;
          this.currentPage = resposta.number;
        }
      );
  }

  verDetalhes(id: number): void {
    this.router.navigate(['/produto-detalhes', id]);
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.loadProdutos(this.currentPage - 1, this.pageSize);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.loadProdutos(this.currentPage + 1, this.pageSize);
    }
  }
}

export interface PaginatedResponse<T> {
  content: T[];
  totalPages: number;
  number: number;
}
