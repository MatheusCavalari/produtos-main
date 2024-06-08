import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/produtos/service/produto.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent {

  produto: any;

  constructor(
    private route: ActivatedRoute,
    private ProdutoService: ProdutoService
  ) { }

  ngOnInit(): void {
    const cpf = this.route.snapshot.paramMap.get('id');
    console.log("sssss",cpf);
    if (cpf !== null) {
      this.ProdutoService.getClienteById(cpf).subscribe(data => {
        this.produto = data;
      });
    } else {
    }
  }



}
