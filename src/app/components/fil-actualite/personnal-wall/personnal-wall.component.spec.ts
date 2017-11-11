import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalWallComponent } from './personnal-wall.component';

describe('PersonnalWallComponent', () => {
  let component: PersonnalWallComponent;
  let fixture: ComponentFixture<PersonnalWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnalWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnalWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
