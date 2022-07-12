import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculoModel } from './model/veiculo-model';
import { VeiculoResumoModel } from './model/veiculo-resumo';
import { ProdutoService } from './service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  veiculos:VeiculoResumoModel[] = [];
  pageIndex:number = 0;
  totalElementos:number = 0;

  array = [1, 2, 3, 4];

  constructor(private router:Router,private service:ProdutoService) { }

  ngOnInit(): void {
    this.service.list(0).subscribe(data =>{
      this.veiculos = data.elementos;
      this.pageIndex = data.pagina;
      this.totalElementos = data.total;
    });
  }

  navegate(event:any) {
    this.router.navigate(['produto/detalhe',event])
  }

  onChangePageIndex(id:number){
    const index = id !== 0 ? id-1:0;
    this.service.list(index).subscribe(data=>{
      this.veiculos = data.elementos;
      this.pageIndex = data.pagina + 1;
      this.totalElementos = data.total;
    })
  }
}
