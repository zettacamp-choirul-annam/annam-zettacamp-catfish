import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondModuleComponent2Component } from './second-module-component2.component';

describe('SecondModuleComponent2Component', () => {
  let component: SecondModuleComponent2Component;
  let fixture: ComponentFixture<SecondModuleComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondModuleComponent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondModuleComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
