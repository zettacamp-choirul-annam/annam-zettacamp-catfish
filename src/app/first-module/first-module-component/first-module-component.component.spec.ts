import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstModuleComponentComponent } from './first-module-component.component';

describe('FirstModuleComponentComponent', () => {
  let component: FirstModuleComponentComponent;
  let fixture: ComponentFixture<FirstModuleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstModuleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstModuleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
