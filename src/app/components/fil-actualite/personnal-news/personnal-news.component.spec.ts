import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalNewsComponent } from './personnal-news.component';

describe('PersonnalNewsComponent', () => {
  let component: PersonnalNewsComponent;
  let fixture: ComponentFixture<PersonnalNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnalNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnalNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
