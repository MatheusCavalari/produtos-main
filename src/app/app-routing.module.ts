import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autenticacao/login/login.component';
import { CadastroComponent } from './autenticacao/cadastro/cadastro.component';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';
import { CadastroProdutoComponent } from './produtos/cadastro-produto/cadastro-produto.component';
import { ProdutoComponent } from './produtos/produto/produto.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
