import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-produto-cartao',
  templateUrl: './produto-cartao.component.html',
  styleUrls: ['./produto-cartao.component.css']
})
export class ProdutoCartaoComponent implements OnInit {

  @Input() description: string ="";
  @Input() image: string="";
  @Output() detalhar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  detalhe() {
    const vari = String("TESTE");
    this.detalhar.emit(vari);
  }
}
