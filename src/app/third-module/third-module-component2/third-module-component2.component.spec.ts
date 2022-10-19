import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdModuleComponent2Component } from './third-module-component2.component';

describe('ThirdModuleComponent2Component', () => {
  let component: ThirdModuleComponent2Component;
  let fixture: ComponentFixture<ThirdModuleComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdModuleComponent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdModuleComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
