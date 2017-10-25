import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueJeuxComponent } from './catalogue-jeux.component';

describe('CatalogueJeuxComponent', () => {
  let component: CatalogueJeuxComponent;
  let fixture: ComponentFixture<CatalogueJeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueJeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueJeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
