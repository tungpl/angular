import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  activateCount = 0;
  deactivateCount = 0;

  userActivated = new EventEmitter<number>();
  userDeactivated = new EventEmitter<number>();

  constructor() { }
 
}
