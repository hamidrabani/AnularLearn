import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpRegisterComponent } from './cmp-register.component';

describe('CmpRegisterComponent', () => {
  let component: CmpRegisterComponent;
  let fixture: ComponentFixture<CmpRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
