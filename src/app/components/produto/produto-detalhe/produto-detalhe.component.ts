import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedesSociais } from 'src/app/models/redes-sociais';
import { Anexo, VeiculoModel } from '../model/veiculo-model';
import { VeiculoResumoModel } from '../model/veiculo-resumo';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {

  entity: VeiculoModel = new VeiculoModel();
  rede = new RedesSociais();
  arrayCarrousel:string[]=[]
  texto:string='';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.entity = this.route.snapshot.data['veiculo'];
    if(this.entity){
      this.toNzUploadFile(this.entity.imagens);
      this.texto = '&text=Olá Nilson! Estou entrando em contato pois quero saber mais sobre o '+this.entity.nome;
    }
  }

  toNzUploadFile(images: Anexo[]) {

    images.forEach(image =>{
      if(image){
        const fileIt = new File(
          [new Blob([`base64,${image.arquivo}`], { type: image.tipo })],
          image.filename,
          { type: image.tipo }
        );
        this.arrayCarrousel.push(`data:${fileIt.type};base64,${image.arquivo}`);
      }
    });

  }

}
