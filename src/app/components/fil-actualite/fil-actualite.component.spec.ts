import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilActualiteComponent } from './fil-actualite.component';

describe('FilActualiteComponent', () => {
  let component: FilActualiteComponent;
  let fixture: ComponentFixture<FilActualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilActualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
