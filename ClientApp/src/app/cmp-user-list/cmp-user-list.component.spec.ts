import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpUserListComponent } from './cmp-user-list.component';

describe('CmpUserListComponent', () => {
  let component: CmpUserListComponent;
  let fixture: ComponentFixture<CmpUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
