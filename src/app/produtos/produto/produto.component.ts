import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/core/material/types/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  produtos!: Produto[];
  constructor (private servicoProduto: ProdutoService, private router: Router){

  }
  ngOnInit(): void {
    this.servicoProduto.listar()
    .subscribe(
      resposta => {
        console.log(resposta),
         this.produtos = resposta,
        console.log(this.produtos)
      }
    )
  }

  verDetalhes(cpf: string): void {
    console.log('cpf',cpf)
    this.router.navigate(['/produto-detalhes', cpf]);
  }

}
