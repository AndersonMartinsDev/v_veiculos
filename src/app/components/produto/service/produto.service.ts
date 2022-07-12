import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { api, defaultHeaders } from 'src/app/shared/constants/headers';
import { VeiculoModel } from '../model/veiculo-model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService implements Resolve<VeiculoModel>{
  constructor(private http:HttpClient) { }


  get baseUrl(){
    return `${api}/api/external`;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): VeiculoModel | Observable<VeiculoModel> | Promise<VeiculoModel> {
    const id = route.paramMap.get("id") ||'';
    return this.obter(id);
  }

  list(pageIndex?:number):Observable<{elementos:[],total:number,pagina:number}>{
    return this.http.get<{elementos:[],total:number,pagina:number}>(`${this.baseUrl}/initial/${pageIndex}`,{headers:defaultHeaders});
  }

  obter(id:string):Observable<VeiculoModel>{
    return this.http.get<VeiculoModel>(`${this.baseUrl}/detalhe/${id}`,{headers:defaultHeaders});
  }
}
