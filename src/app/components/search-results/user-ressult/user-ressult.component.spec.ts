import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRessultComponent } from './user-ressult.component';

describe('UserRessultComponent', () => {
  let component: UserRessultComponent;
  let fixture: ComponentFixture<UserRessultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRessultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRessultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
