import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',pathMatch: 'full', redirectTo:'/produto'},
  {path:'home',component: HomeComponent},
  {path:'produto',loadChildren:() => import('./components/produto/produto.module').then(m => m.ProdutoModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
