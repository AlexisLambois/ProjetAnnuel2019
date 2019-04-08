import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterResponsiveComponent } from './footer-responsive.component';

describe('FooterResponsiveComponent', () => {
  let component: FooterResponsiveComponent;
  let fixture: ComponentFixture<FooterResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
