import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueJeuxComponent } from './dialogue-jeux.component';

describe('DialogueJeuxComponent', () => {
  let component: DialogueJeuxComponent;
  let fixture: ComponentFixture<DialogueJeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogueJeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueJeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
