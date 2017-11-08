import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormSubscribeComponent } from './user-form-subscribe.component';

describe('UserFormSubscribeComponent', () => {
  let component: UserFormSubscribeComponent;
  let fixture: ComponentFixture<UserFormSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
