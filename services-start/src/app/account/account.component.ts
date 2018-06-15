import { AccountService } from './../account.service';
import { Component, EventEmitter, Input } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;  

  constructor(private loggingSerivice: LoggingService, private accountService: AccountService) {}
  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    //this.loggingSerivice.logStatusChange(status);
    this.accountService.statusUpdated.emit(status); 
  }
}
