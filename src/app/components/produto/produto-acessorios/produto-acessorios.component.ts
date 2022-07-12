import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-acessorios',
  templateUrl: './produto-acessorios.component.html',
  styleUrls: ['./produto-acessorios.component.css']
})
export class ProdutoAcessoriosComponent implements OnInit {
  @Input() descricao: string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
