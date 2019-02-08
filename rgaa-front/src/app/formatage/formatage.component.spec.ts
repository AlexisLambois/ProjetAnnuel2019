import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatageComponent } from './formatage.component';

describe('FormatageComponent', () => {
  let component: FormatageComponent;
  let fixture: ComponentFixture<FormatageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
