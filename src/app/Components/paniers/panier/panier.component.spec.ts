import { ComponentFixture, TestBed } from '@angular/core/testing';

import { panierComponent } from './panier.component';

describe('PanierComponent', () => {
  let component: panierComponent;
  let fixture: ComponentFixture<panierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [panierComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(panierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
