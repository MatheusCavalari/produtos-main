import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/core/material/material.module";
import { BannerComponent } from "./banner/banner.component";
import { ContainerComponent } from "./container/container.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";


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
