import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepanierComponent } from './list-panier.component';

describe('ListpanierComponent', () => {
  let component: ListepanierComponent;
  let fixture: ComponentFixture<ListepanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListepanierComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListepanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
