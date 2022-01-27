import { Component, OnInit } from '@angular/core';
import { RedesSociais } from 'src/app/models/redes-sociais';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  rede = new RedesSociais();
}
