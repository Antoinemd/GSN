import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Searchbv3Component } from './searchbv3.component';

describe('Searchbv3Component', () => {
  let component: Searchbv3Component;
  let fixture: ComponentFixture<Searchbv3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Searchbv3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Searchbv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
