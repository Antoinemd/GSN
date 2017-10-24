import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalGamelistComponent } from './personnal-gamelist.component';

describe('PersonnalGamelistComponent', () => {
  let component: PersonnalGamelistComponent;
  let fixture: ComponentFixture<PersonnalGamelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnalGamelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnalGamelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
