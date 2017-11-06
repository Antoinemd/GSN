import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsFormComponent } from './subs-form.component';

describe('SubsFormComponent', () => {
  let component: SubsFormComponent;
  let fixture: ComponentFixture<SubsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
