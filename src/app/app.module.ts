import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ProdutoModule } from './components/produto/produto.module';
import { HomeModule } from './components/home/home.module';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

registerLocaleData(pt);

const NGZORROMODULES = [
  NzLayoutModule,
  NzSpaceModule,
  NzGridModule,
  NzImageModule,
  NzDividerModule,
  NzIconModule
]

const CREATEDMODULES = [
  HomeModule,
  ProdutoModule
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    ...CREATEDMODULES,
    ...NGZORROMODULES
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...NGZORROMODULES,
    ...CREATEDMODULES

  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
