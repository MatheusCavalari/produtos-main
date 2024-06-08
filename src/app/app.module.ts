import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material/material.module';
import { SharedModule } from './shared/shared.module';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { ProdutoModule } from './produtos/produto.module';
import { LoginComponent } from './autenticacao/login/login.component';
import { ContainerComponent } from './shared/container/container.component';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    ProdutoModule,
    AutenticacaoModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
