import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReformeComponent } from './reforme.component';

describe('ReformeComponent', () => {
  let component: ReformeComponent;
  let fixture: ComponentFixture<ReformeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReformeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
