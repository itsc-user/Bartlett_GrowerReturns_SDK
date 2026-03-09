import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalStore } from '../../store/global-store';
import { SohoMessageService } from 'ids-enterprise-ng';
import { MIService, UserService } from '@infor-up/m3-odin-angular';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-receiptdate',
  providers: [DatePipe],
  templateUrl: './receiptdate.component.html',
  styleUrls: ['./receiptdate.component.css'],
})
export class ReceiptdateComponent {
  fromdate: any;
  todate: any;
  POfrom01: Date;
  POfromx1: any;
  POfrom02: Date;
  POfromx2: any;

  constructor(
    private _interactionService: InteractionService,
    private miService: MIService,
    private userService: UserService,
    private globalStore: GlobalStore,
    private datePipe: DatePipe,
    private messageService: SohoMessageService
  ) {}

  onChange($event: any) {
    throw new Error('Method not implemented.');
  }

  onChange01(updatedValue: string): void {
    if (!updatedValue) return;

    // Parse string in dd/MM/yyyy format
    const [day, month, year] = updatedValue.split('/').map(Number);
    const dateObj = new Date(year, month - 1, day);

    this.POfrom01 = dateObj;
    this.POfromx1 = this.datePipe.transform(this.POfrom01, 'yyyyMMdd');
    this.globalStore.setfrom(this.POfromx1);
  }

  onChange02(updatedValue: string): void {
    if (!updatedValue) return;

    // Parse string in dd/MM/yyyy format
    const [day, month, year] = updatedValue.split('/').map(Number);
    const dateObj = new Date(year, month - 1, day);

    this.POfrom02 = dateObj;
    this.POfromx2 = this.datePipe.transform(this.POfrom02, 'yyyyMMdd');
    this.globalStore.setto(this.POfromx2);
  }
}
