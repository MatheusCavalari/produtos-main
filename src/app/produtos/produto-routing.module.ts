import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { ProdutoComponent } from "./produto/produto.component";
import { ProdutoDetalheComponent } from "./produto-detalhe/produto-detalhe.component";

const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutoComponent
  },
  {
    path: 'produto-detalhes/:id',
    component: ProdutoDetalheComponent
  }
]

@NgModule ({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProdutoRoutingModule {}
