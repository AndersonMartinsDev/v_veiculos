import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoResumoModel } from './model/veiculo-resumo';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoComponent } from './produto.component';
import { ProdutoService } from './service/produto.service';

const routes: Routes = [
  {path:'',component:ProdutoComponent},
  {path:'detalhe/:id',resolve:{veiculo:ProdutoService},component:ProdutoDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
