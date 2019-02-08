import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseMenuComponent } from './collapse-menu.component';

describe('CollapseMenuComponent', () => {
  let component: CollapseMenuComponent;
  let fixture: ComponentFixture<CollapseMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
