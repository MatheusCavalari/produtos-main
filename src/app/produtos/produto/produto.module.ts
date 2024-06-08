import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MaterialModule } from 'src/app/core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/header/shared.module';
import { ProdutoComponent } from './produto.component';

@NgModule({
  declarations:[
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ProdutoComponent
  ]
})

export class ProdutoModule{}
