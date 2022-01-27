import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoModule } from '../produto/produto.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProdutoModule,
    SharedModule
  ]
})
export class HomeModule { }
