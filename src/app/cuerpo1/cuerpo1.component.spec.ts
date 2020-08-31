import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuerpo1Component } from './cuerpo1.component';

describe('Cuerpo1Component', () => {
  let component: Cuerpo1Component;
  let fixture: ComponentFixture<Cuerpo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cuerpo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuerpo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
