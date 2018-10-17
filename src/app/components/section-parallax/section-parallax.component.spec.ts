import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionParallaxComponent } from './section-parallax.component';

describe('SectionParallaxComponent', () => {
  let component: SectionParallaxComponent;
  let fixture: ComponentFixture<SectionParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
