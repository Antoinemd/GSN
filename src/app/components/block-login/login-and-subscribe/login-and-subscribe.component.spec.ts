import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAndSubscribeComponent } from './login-and-subscribe.component';

describe('LoginAndSubscribeComponent', () => {
  let component: LoginAndSubscribeComponent;
  let fixture: ComponentFixture<LoginAndSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAndSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAndSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
