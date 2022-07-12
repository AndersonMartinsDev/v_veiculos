import { NzUploadFile } from "ng-zorro-antd/upload";

export class VeiculoModel {
  id!:number;
  nome!:string;
  descricao!: string;
  caracteristicas!: string[];
  imagens!:Anexo[];
}

export class Anexo {
  id!: number;
  filename!:string;
  tipo!:string;
  arquivo!: NzUploadFile;
}
