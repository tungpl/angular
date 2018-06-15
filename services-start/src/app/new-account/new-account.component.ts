import { AccountService } from './../account.service';
import { Component, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  //providers: [LoggingService]
})
export class NewAccountComponent { 
  
  constructor(private loggingService: LoggingService, private accountService: AccountService) {    
  }  

  onCreateAccount(accountName: string, accountStatus: string) { 
    this.accountService.addAccount(accountName, accountStatus);
        //this.loggingService.logStatusChange(accountStatus); 
        this.accountService.accountCreated.emit("A new account created with name: " + accountName );        
  }
}
