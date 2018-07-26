import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../node_modules/rxjs';


@Injectable()
export class CommunicatorService {

  private msg = new BehaviorSubject<string>('');
 cast = this.msg.asObservable();
constructor() {

}
 passData(d) {
  this.msg.next(d);
 }

}
