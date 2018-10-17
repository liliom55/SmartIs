import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceMenuComponent } from './ecommerce-menu.component';

describe('EcommerceMenuComponent', () => {
  let component: EcommerceMenuComponent;
  let fixture: ComponentFixture<EcommerceMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
