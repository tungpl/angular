import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];

  constructor(private userService: UserService){
    this.userService.userActivated.subscribe(
      (id: number) => {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
      }
    );

    this.userService.userDeactivated.subscribe(
      (id: number) => {
        this.inactiveUsers.push(this.inactiveUsers[id]);
        this.activeUsers.splice(id, 1);
      }
    );
  }

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }
}
