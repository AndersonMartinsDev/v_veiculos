import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  array = [1, 2, 3, 4];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navegate(event:any) {
    this.router.navigate(['produto/detalhe'])
  }

  get products(){
    return [
      {
        image:"https://content2.kawasaki.com/ContentStorage/KMB/Products/5435/12e52613-866d-4d78-a3d6-4fba9777f8dd.png",
        description:"kawasaki Ninja 600cc - 2013"
      },
      {
        image:"https://motorshow.com.br/wp-content/uploads/sites/2/2019/10/20191019_105443_1024x768.jpg",
        description:"Saveiro Robust 2019"
      },
      {
        image:"https://cdn.motor1.com/images/mgl/VAlGG/s1/caoa-chery-tiggo-3x-turbo.jpg",
        description:"Tiggo-2019"
      },
      {
        image:"https://s2.glbimg.com/xPjnQArPKQl73-i5F2QaSAgNSjQ=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/5/V/5NMIcrQUuXnky9rJCxbg/2015-11-23-novo-hyundai-hb20s-2-2.jpg",
        description:"HB20s - 2020"
      },
      {
        image:"https://www.dezeroacem.com.br/wordpress/wp-content/uploads/2017/01/Fiat-Strada-Adventure-2017.jpg",
        description:"Strada - 2020"
      },
      {
        image:"https://content2.kawasaki.com/ContentStorage/KMB/Products/5435/12e52613-866d-4d78-a3d6-4fba9777f8dd.png",
        description:"kawasaki Ninja 600cc - 2013"
      }
    ]
  }
}
