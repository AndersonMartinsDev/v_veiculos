import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAcessoriosComponent } from './produto-acessorios.component';

describe('ProdutoAcessoriosComponent', () => {
  let component: ProdutoAcessoriosComponent;
  let fixture: ComponentFixture<ProdutoAcessoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoAcessoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoAcessoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
