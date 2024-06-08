import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MaterialModule } from 'src/app/core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutoComponent } from './produto.component';
import { SharedModule } from 'src/app/shared/shared.module';

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
