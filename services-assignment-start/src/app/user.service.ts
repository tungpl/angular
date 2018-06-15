import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  activateCount = 0;
  deactivateCount = 0  

  constructor() { }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
  }
  setToInactive(id: number) {
    this.inactiveUsers.push(this.inactiveUsers[id]);
    this.activeUsers.splice(id,1);
  }
 
}
