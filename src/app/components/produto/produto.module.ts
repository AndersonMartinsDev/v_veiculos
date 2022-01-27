import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoCartaoComponent } from './produto-cartao/produto-cartao.component';
import { ProdutoComponent } from './produto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoAcessoriosComponent } from './produto-acessorios/produto-acessorios.component';



@NgModule({
  declarations: [
    ProdutoComponent,
    ProdutoCartaoComponent,
    ProdutoDetalheComponent,
    ProdutoAcessoriosComponent
  ],
  exports:[
    ProdutoCartaoComponent,
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
