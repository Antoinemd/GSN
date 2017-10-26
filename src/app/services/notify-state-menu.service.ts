import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotifyStateMenuService {

  // isVisibleSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }

  private subject = new Subject<any>();
      
  // sendMessage(message: string) {
  //     this.subject.next({ text: message });
  // }

  sendMessage(message: boolean) {
    this.subject.next({ boolean: message });
  }
      
  clearMessage() {
    this.subject.next();
  }
      
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
