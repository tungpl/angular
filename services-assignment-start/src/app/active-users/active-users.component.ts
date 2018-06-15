import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  
  constructor(private userService: UserService) {}

  onSetToInactive(id: number) {
    this.userService.userDeactivated.emit(id);
    this.userService.deactivateCount ++;
    console.log('Deactivate '+ this.userService.deactivateCount + "  time");
  }
}
