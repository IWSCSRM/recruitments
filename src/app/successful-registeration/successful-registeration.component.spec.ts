import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulRegisterationComponent } from './successful-registeration.component';

describe('SuccessfulRegisterationComponent', () => {
  let component: SuccessfulRegisterationComponent;
  let fixture: ComponentFixture<SuccessfulRegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulRegisterationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
