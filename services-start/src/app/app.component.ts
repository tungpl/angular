import { AccountService } from './account.service';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [AccountService]
})
export class AppComponent implements OnInit  {  
  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );

    this.accountService.accountCreated.subscribe(
      (message: string) => alert(message)
    );
  }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }  
}
