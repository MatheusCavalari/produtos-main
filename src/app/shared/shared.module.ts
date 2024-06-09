import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/core/material/material.module";
import { HeaderComponent } from "./header/header.component";
import { ContainerComponent } from "./container/container.component";
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    BannerComponent
  ]

})

export class SharedModule{ }
