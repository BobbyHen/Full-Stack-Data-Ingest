import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailButtonComponent } from './user-detail-button.component';

describe('UserDetailButtonComponent', () => {
  let component: UserDetailButtonComponent;
  let fixture: ComponentFixture<UserDetailButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
