import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { ProdutoComponent } from "./produto/produto.component";
import { ProdutoDetalheComponent } from "./produto-detalhe/produto-detalhe.component";
import { CadastroProdutoComponent } from "./cadastro-produto/cadastro-produto.component";

const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutoComponent
  },
  {
    path: 'produto-detalhes/:id',
    component: ProdutoDetalheComponent
  },
  {
    path: 'cadastro-produto',
    component: CadastroProdutoComponent
  }
]

@NgModule ({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProdutoRoutingModule {}
