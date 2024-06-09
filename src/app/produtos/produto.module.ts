import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MaterialModule } from 'src/app/core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutoComponent } from './produto/produto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';

@NgModule({
  declarations:[
    ProdutoComponent,
    ProdutoDetalheComponent,
    CadastroProdutoComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ProdutoComponent,
    ProdutoDetalheComponent,
    CadastroProdutoComponent
  ]
})

export class ProdutoModule{}
