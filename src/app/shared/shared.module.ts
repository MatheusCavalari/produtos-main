import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/core/material/material.module";
import { HeaderComponent } from "./header/header.component";
import { ContainerComponent } from "./container/container.component";

@NgModule({
  declarations: [
    HeaderComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    ContainerComponent
  ]

})

export class SharedModule{ }
