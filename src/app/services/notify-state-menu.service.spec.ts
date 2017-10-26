import { TestBed, inject } from '@angular/core/testing';

import { NotifyStateMenuService } from './notify-state-menu.service';

describe('NotifyStateMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotifyStateMenuService]
    });
  });

  it('should be created', inject([NotifyStateMenuService], (service: NotifyStateMenuService) => {
    expect(service).toBeTruthy();
  }));
});
