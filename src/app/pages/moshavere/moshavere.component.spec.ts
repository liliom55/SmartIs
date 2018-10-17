import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoshavereComponent } from './moshavere.component';

describe('MoshavereComponent', () => {
  let component: MoshavereComponent;
  let fixture: ComponentFixture<MoshavereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoshavereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoshavereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
