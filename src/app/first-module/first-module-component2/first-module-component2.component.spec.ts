import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstModuleComponent2Component } from './first-module-component2.component';

describe('FirstModuleComponent2Component', () => {
  let component: FirstModuleComponent2Component;
  let fixture: ComponentFixture<FirstModuleComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstModuleComponent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstModuleComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
