import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsiteComponent } from './mapsite.component';

describe('MapsiteComponent', () => {
  let component: MapsiteComponent;
  let fixture: ComponentFixture<MapsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
