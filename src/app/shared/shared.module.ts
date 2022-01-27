import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

const NGZORROMODULES = [
  NzLayoutModule,
  NzSpaceModule,
  NzGridModule,
  NzImageModule,
  NzDividerModule,
  NzCardModule,
  NzCarouselModule,
  NzIconModule,
  NzDescriptionsModule,
  NzCommentModule,
  NzListModule,
  NzBreadCrumbModule
]

@NgModule({
  declarations: [
  ],
  exports:[
    ...NGZORROMODULES
  ],
  imports: [
    CommonModule,
    ...NGZORROMODULES
  ]
})
export class SharedModule { }
