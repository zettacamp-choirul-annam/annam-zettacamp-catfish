import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondModuleComponentComponent } from './second-module-component.component';

describe('SecondModuleComponentComponent', () => {
  let component: SecondModuleComponentComponent;
  let fixture: ComponentFixture<SecondModuleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondModuleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondModuleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
