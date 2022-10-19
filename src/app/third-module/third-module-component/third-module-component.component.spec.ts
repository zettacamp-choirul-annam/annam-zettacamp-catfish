import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdModuleComponentComponent } from './third-module-component.component';

describe('ThirdModuleComponentComponent', () => {
  let component: ThirdModuleComponentComponent;
  let fixture: ComponentFixture<ThirdModuleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdModuleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdModuleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
