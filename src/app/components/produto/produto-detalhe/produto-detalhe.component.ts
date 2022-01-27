import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NzCarouselContentDirective, NzCarouselFlipStrategy, NzCarouselOpacityStrategy } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  acessorios = [
    {icon:"instagram",descricao:"Ar condicionado"},
    {icon:"car",descricao:"Direção Hidraulica"},
    {icon:"meh",descricao:"Motor 16v"},
    {icon:"phone",descricao:"1.8"},
    {icon:"node-index",descricao:"Aros de liga leve"},
    {icon:"subnode",descricao:"Vidro elétrico"},
    {icon:"instagram",descricao:"Ar condicionado"},
    {icon:"car",descricao:"Direção Hidraulica"},
    {icon:"meh",descricao:"Motor 16v"},
    {icon:"phone",descricao:"1.8"},
    {icon:"node-index",descricao:"Aros de liga leve"},
    {icon:"subnode",descricao:"Vidro elétrico"},
    {icon:"instagram",descricao:"Ar condicionado"},
    {icon:"car",descricao:"Direção Hidraulica"},
    {icon:"meh",descricao:"Motor 16v"},
    {icon:"phone",descricao:"1.8"},
    {icon:"node-index",descricao:"Aros de liga leve"},
    {icon:"subnode",descricao:"Vidro elétrico"},
  ];
  arrayCarrousel = [
    "https://garagem360.com.br/wp-content/uploads/2021/05/ee02aa57-61ff-46dd-89c0-ee2e33c35d10.jpg",
    "https://allthecars.files.wordpress.com/2019/04/volkswagen-saveiro-2020-robust-01.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg2Ly1-LfEaYjzuLtTCiEGwRCiXC0zzTVUR_u9k0kp-_ZYEJEZRdgIiINYoWBIBaXfTns&usqp=CAU"
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
