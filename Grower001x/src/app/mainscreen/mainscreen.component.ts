// Grower Returns 1.0 , Remco Driessen, Feb 2025

import { InteractionService } from '../interaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Directive,
  Input,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  AfterViewInit,
  ViewContainerRef,
  Component,
} from '@angular/core';
import {
  SohoIconsEmptyComponent,
  SohoLookupComponent,
} from 'ids-enterprise-ng';
import {
  SohoToastService,
  SohoNotificationService,
  SohoMessageService,
  SohoMessageRef,
  SohoDropDownComponent,
  SohoSpinboxComponent,
  SohoModalDialogService,
  SohoModalDialogRef,
  SohoDragDirective,
} from 'ids-enterprise-ng';
import {
  IMIRequest,
  IMIResponse,
  MIRecord,
  ArrayUtil,
  CoreBase,
  IUserContext,
  IIonApiRequest,
  IIonApiResponse,
} from '@infor-up/m3-odin';
import {
  MIService,
  UserService,
  ApplicationService,
  IonApiService,
} from '@infor-up/m3-odin-angular';
import { DataService } from '../data.service';
import { GlobalStore } from '../../store/global-store';
import { of, Observable, BehaviorSubject, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css'],
})
export class MainscreenComponent implements OnInit {
  iDKG: any;
  iDPC: any;
  exportToExcel() {
    throw new Error('Method not implemented.');
  }
  iGRVAR: any;
  iPVAR: any;
  cSEAQTY($event: any) {
    throw new Error('Method not implemented.');
  }
  iunderq: any;
  cSwETQTY($event: any) {
    throw new Error('Method not implemented.');
  }
  ioverq: any;
  //

  cSETPOVER(event: KeyboardEvent) {
    this.ioverq = (this.iAssignedPOver * parseFloat(this.iOVER)).toFixed(2);
  }

  cSETPUNDER(event: KeyboardEvent) {
    this.iunderq = (this.iAssignedPUnder * parseFloat(this.iUNDER)).toFixed(2);
  }

  iAssignedPOver = 0;
  iAssignedPUnder = 0;
  iPUNO: string;
  iblocked = 'blocked';
  iBLSB: any;
  cUNQTY($event: any) {
    throw new Error('Method not implemented.');
  }
  cOVQTY($event: any) {
    throw new Error('Method not implemented.');
  }
  IPVAL: number;
  iDEDUCT: any;
  wastex: number;
  deduv: number;
  setqtyx: number;
  ipus: any;
  ipgfd: any;
  isddus: any;

  iassos: any;
  calcUSized: any;
  calcOSized: any;
  iPACKEDBS2: string;
  iUNDER: string;
  iOVER: string;
  GRVALP() {
    throw new Error('Method not implemented.');
  }

  cGRVAL($event: any) {
    throw new Error('Method not implemented.');
  }
  iPVAL: any;
  cCFI3($event: any) {
    throw new Error('Method not implemented.');
  }
  cUNMS($event: any) {
    throw new Error('Method not implemented.');
  }
  cITDS($event: any) {
    throw new Error('Method not implemented.');
  }
  onChangeEvent01($event: any) {
    throw new Error('Method not implemented.');
  }
  iCALCVAR: string;

  itm_refresh() {
    this.interactionService.sendMessage('refresh001');
  }
  iCALCINV: any;
  respGR0060: IMIResponse;
  iSIZE: any;

  cTHRES(event: any) {
    this.userService.getUserContext().subscribe(
      (context) => {
        const input = new MIRecord();
        input.setString('ATNR', this.iATNR);
        input.setString('ATID', 'THRESHOLD');
        input.setString('ATVA', event.target.value);
        const request: IMIRequest = {
          program: 'ATS101MI',
          transaction: 'SetAttrValue',
          record: input,
          maxReturnedRecords: 1000,
        };
        this.miService.execute(request).subscribe(
          (response: IMIResponse) => {
            if (!response.hasError()) {
            } else {
            }
          },
          (error) => {
            //  this.openError02(error.errorMessage);
          },
        );
      },
      (error) => {},
    );

    //   if (this.iMO === 'BS3') {
    //     if (this.iMOWASTE > this.iTHRES) {
    //       this.iDEDUCT = (this.iMOWASTE - this.iTHRES).toFixed(3);
    //     } else {
    //       this.iDEDUCT = 0;
    //     }

    //     this.wastex = this.iIssued - this.iPOREC;

    //deduction in kilos
    //     this.deduv = (this.iDEDUCT / 100) * this.iIssued;
    //     this.setqtyx = this.iPOREC - this.deduv;
    //     this.iPVAL = (this.setqtyx * this.iAssignedP).toFixed(2);
    //   }

    //    if (this.iMO !== 'BS3') {
    //      if (this.iMOWASTE > this.iTHRES) {
    //        this.iDEDUCT = (this.iMOWASTE - this.iTHRES).toFixed(3);
    //      } else {
    //        this.iDEDUCT = 0;
    //      }

    //      this.wastex = this.iIssued - this.iPOREC;

    //deduction in kilos
    //      this.deduv = (this.iDEDUCT / 100) * this.iIssued;
    //      this.setqtyx = this.iPOREC - this.deduv;
    //      this.iPVAL = (this.setqtyx * this.iAssignedP).toFixed(2);
    //    }

    setTimeout(() => {
      this.interactionService.sendMessage('recalculate');
    }, 1500);
  }

  iFGTP: any;
  iAPRICE: any;
  iBANO: any;
  iCSETT: any;
  show1 = false;
  iRVQA: any;
  oITDS: any;
  show: any;
  acti: any;
  respGR004q: IMIResponse;
  iATNR: string;
  ss: any;
  sss: any;
  sbn = false;
  iVHR01: string;
  iVHR02: string;
  iVHR03: string;
  iVHR04: string;
  iVHP01: string;
  iVHP02: string;
  iVHP03: string;
  iVHP04: string;
  iVHL01: string;
  iVHL02: string;
  iVHL03: string;
  iVHL04: string;
  iITGR: any;
  iMOWASTE: any;
  iTHRES: any;
  iVARIETY: any;
  iFIELD: any;
  iGrowername: any;
  iGrowerArea: any;
  iCrop: any;
  iFreeBuy: any;
  iContract: any;
  iContractPerc: any;
  iAssignedP: any;
  iIssued: any;
  iSold: any;
  iMO: any;
  iPOREC: any;
  iSETQTY: any;
  onTabActivated(event: any) {
    console.log(event.tab.hash);

    if (event.tab.hash === '#tab01') {
      this.acti = 'main01';
    }
    if (event.tab.hash === '#tab02') {
      this.acti = 'main02';
    }
    if (event.tab.hash === '#tab03') {
      this.acti = 'main03';
    }
    if (
      this.acti === 'main01' ||
      this.acti === 'main02' ||
      this.acti === 'main03'
    ) {
      this.show1 = false;
    } else {
      this.show1 = true;
    }
  }

  async update_attr() {
    this.toastService.show({
      title: 'Update Attributes',
      message: 'In Progress...',
    });
    //

    this.checkPPS118Block(this.iPUNO);

    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'PRICEOVERS', this.iAssignedPOver),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}

    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(
          this.iATNR,
          'PRICEUNDERS',
          this.iAssignedPUnder,
        ),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}

    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'QTYOVERS', this.iOVER),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}

    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'QTYUNDERS', this.iUNDER),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}

    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'MO_REC_ITM1', this.iVHR01),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}

    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'MO_REC_ITM2', this.iVHR02),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'MO_REC_ITM3', this.iVHR03),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'MO_REC_ITM4', this.iVHR04),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'RECEIPT_ITM1', this.iVHP01),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'RECEIPT_ITM2', this.iVHP02),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'RECEIPT_ITM3', this.iVHP03),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'RECEIPT_ITM4', this.iVHP04),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'PRICEITEM1', this.iVHL01),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'PRICEITEM2', this.iVHL02),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'PRICEITEM3', this.iVHL03),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'PRICEITEM4', this.iVHL04),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'ITEM_GROUP', this.iITGR),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    this.toastService.show({
      title: 'Update Attributes',
      message: 'In Progress...',
    });
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'MOWASTAGE', this.iMOWASTE),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'THRESHOLD', this.iTHRES),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'VARIETY', this.iVARIETY),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'FIELD', this.iFIELD),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'GNAME', this.iGrowername),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'GAREA', this.iGrowerArea),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'SIZE', this.iSIZE),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'CROPCYCLE', this.iCrop),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'FREEBUYPRICE', this.iFreeBuy),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'CONTRACTPRICE', this.iContract),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'CONTRACTPERC', this.iContractPerc),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    this.toastService.show({
      title: 'Update Attributes',
      message: 'In Progress...',
    });
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'ASSIGNEDPRICE', this.iAssignedP),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'ISSUED_QTY', this.iIssued),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'SOLD', this.iSold),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'MO_TYPE', this.iMO),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}
    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'PO_RECEIVED_QTY', this.iPOREC),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}

    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'SETTLED_QTY', this.iCSETT),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}

    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'GR_VARIANCE', this.iCALCVAR),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}

    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'DEDUCTIONKG', this.iDKG),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}

    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'DEDUCTIONPERC', this.iDPC),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];
      }
    } catch (error) {}

    try {
      this.respGR0060 = await lastValueFrom(
        this.dataService.GR0060(this.iATNR, 'CALC_INV_VALUE', this.iPVAL),
      );
      for (let d1 = 0; d1 < this.respGR0060.items.length; d1++) {
        const itemd1 = this.respGR0060.items[d1];

        this.updatemodel();
      }
    } catch (error) {
      this.updatemodel();
    }
  }
  checkPPS118Block(puno) {
    const input = new MIRecord();
    this.userService.getUserContext().subscribe(
      (context) => {
        const input = new MIRecord();

        input.setString('F_PUNO', puno);
        input.setString('T_PUNO', puno);
        input.setString('F2DIVI', 'ABA');

        const request: IMIRequest = {
          program: 'CMS100MI',
          transaction: 'Lst_GR_PPS118',
          record: input,
          outputFields: [
            'F2DIVI',
            'F2PUNO',
            'F2PNLI',
            'F2PNLS',
            'F2REPN',
            'F2ORTY',
            'F2BLSB',
            'F2RPQA',
          ],
          maxReturnedRecords: 5000,
          company: this.curcono,
        };

        this.miService.execute(request).subscribe(
          async (response: IMIResponse) => {
            if (!response.hasError()) {
              for (let i = 0; i < response.items.length; i++) {
                const item = response.items[i];

                this.iBLSB = item.F2BLSB;

                console.log('wedd ' + this.globalStore.getTAB());
              }
            } else {
            }
          },
          (error) => {
            this.openError02(error.errorMessage);
          },
        );
      },
      (error) => {},
    );
  }

  unlock(divi, puno, pnli, pnls, repn) {
    this.applicationService.launch(
      'mforms://_automation?data=<?xml+version="1.0"+encoding="utf-8"?><sequence><step+command="RUN"+value="CMS010"></step><step+command="KEY"+value="ENTER"><field+name="WWQTTP">1</field><field+name="W1IBCA">ZPPS118</field></step><step+command="LSTOPT"+value="24"></step><step+command="KEY"+value="ENTER"><field+name="W1OBKV">' +
        divi +
        '</field><field+name="W2OBKV">' +
        puno +
        '</field><field+name="W3OBKV">' +
        pnli +
        '</field><field+name="W4OBKV">' +
        pnls +
        '</field><field+name="W5OBKV">' +
        repn +
        '</field></step><step+command="LSTOPT"+value="13"></step><step+command="KEY"+value="F3"></step><step+command="KEY"+value="F3"></step></sequence>',
    );
  }

  update_attributes(atid, atva) {
    this.userService.getUserContext().subscribe(
      (context) => {
        const input = new MIRecord();
        input.setString('ATNR', this.iATNR);
        input.setString('ATID', atid);
        input.setString('ATVA', atva);
        const request: IMIRequest = {
          program: 'ATS101MI',
          transaction: 'SetAttrValue',
          record: input,
          maxReturnedRecords: 5000,
        };
        this.miService.execute(request).subscribe(
          (response: IMIResponse) => {
            if (!response.hasError()) {
            } else {
            }
          },
          (error) => {
            //  this.openError02(error.errorMessage);
          },
        );
      },
      (error) => {},
    );
  }

  cSETQTY(event: any) {
    // this.globalStore.setSAPR(event.target.value);

    this.toastService.show({
      title: 'Updating Overwrite Settled Qty',
      message: 'In Progress...',
    });

    this.userService.getUserContext().subscribe(
      (context) => {
        const input = new MIRecord();
        input.setString('ATNR', this.iATNR);
        input.setString('ATID', 'OVERWRITESETQTY');
        input.setString('ATVA', event.target.value);
        const request: IMIRequest = {
          program: 'ATS101MI',
          transaction: 'SetAttrValue',
          record: input,
          maxReturnedRecords: 1000,
        };
        this.miService.execute(request).subscribe(
          (response: IMIResponse) => {
            if (!response.hasError()) {
              //     this.interactionService.sendMessage('refresh001');
            } else {
            }
          },
          (error) => {
            //  this.openError02(error.errorMessage);
          },
        );
      },
      (error) => {},
    );

    setTimeout(() => {
      this.interactionService.sendMessage('recalculate');
    }, 1500);
  }

  updatemodel() {
    const request01 = this.createRequest01();
    this.ionApiService.execute(request01).subscribe(
      (response: IIonApiResponse) => {
        // TODO Error
      },
      (response: IIonApiResponse) => {
        setTimeout(() => {
          this.backtoC(this.iITNO, this.iBANO);
        }, 1000);
        // TODO Error
      },
    );
  }

  backtoC(itno, bano) {
    const request02 = this.createRequest02(itno, bano);
    this.ionApiService.execute(request02).subscribe(
      (response: IIonApiResponse) => {
        // TODO Error
      },
      (response: IIonApiResponse) => {
        setTimeout(() => {
          this.backtoD();
        }, 1000);
        // TODO Error
      },
    );
  }

  backtoD() {
    const request03 = this.createRequest03();
    this.ionApiService.execute(request03).subscribe(
      (response: IIonApiResponse) => {
        // TODO Error
      },
      (response: IIonApiResponse) => {
        this.toastService.show({
          title: 'Update Attributes',
          message: 'Finished...',
        });
        this.triggerBusinessContext_01('refresh');
        // TODO Error
      },
    );
  }

  // IPS webservice to trigger ATS101 F18 calculate attributes
  private createRequest01(headers?: object): IIonApiRequest {
    if (!headers) {
      // Create default headers
      headers = {
        Accept: 'application/xml',
        'Content-Type': 'application/xml',
      };
    }

    const subr01 =
      '<?xml version="1.0" encoding="UTF-8" standalone="no"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cred="http://lawson.com/ws/credentials" xmlns:mms="http://schemas.infor.com/ips/MMS235_A/MMS235_A"><SOAP-ENV:Header><cred:lws><cred:company>' +
      this.curcono +
      '</cred:company><cred:division>' +
      this.curdivi +
      '</cred:division></cred:lws></SOAP-ENV:Header><SOAP-ENV:Body><mms:MMS235_A><mms:MMS235/></mms:MMS235_A></SOAP-ENV:Body></SOAP-ENV:Envelope>';
    // Create the relative URL to the ION API
    const url01 = 'M3/ips/service/MMS235_A';
    // Create HTTP GET request object
    const request01: IIonApiRequest = {
      method: 'POST',
      url: url01,
      headers,
      source: 'qq',
      body: subr01,
    };
    return request01;
  }

  private createRequest02(itno, bano, headers?: object): IIonApiRequest {
    if (!headers) {
      // Create default headers
      headers = {
        Accept: 'application/xml',
        'Content-Type': 'application/xml',
      };
    }
    const subr02 =
      '<?xml version="1.0" encoding="UTF-8" standalone="no"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cred="http://lawson.com/ws/credentials" xmlns:upd="http://schemas.infor.com/ips/F18_Update002/UpdateF18"><SOAP-ENV:Header><cred:lws><cred:company>' +
      this.curcono +
      '</cred:company><cred:division>' +
      this.curdivi +
      '</cred:division></cred:lws></SOAP-ENV:Header><SOAP-ENV:Body><upd:UpdateF18><upd:MMS235><upd:LotNumber>' +
      bano +
      '</upd:LotNumber><upd:ItemNumber>' +
      itno +
      '</upd:ItemNumber><upd:ATS101/></upd:MMS235></upd:UpdateF18></SOAP-ENV:Body></SOAP-ENV:Envelope>';
    // Create the relative URL to the ION API
    const url02 = 'M3/ips/service/F18_Update002';
    // Create HTTP GET request object
    const request02: IIonApiRequest = {
      method: 'POST',
      url: url02,
      headers,
      source: 'qq',
      body: subr02,
    };
    return request02;
  }

  private createRequest03(headers?: object): IIonApiRequest {
    if (!headers) {
      // Create default headers
      headers = {
        Accept: 'application/xml',
        'Content-Type': 'application/xml',
      };
    }
    const subr03 =
      '<?xml version="1.0" encoding="UTF-8" standalone="no"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cred="http://lawson.com/ws/credentials" xmlns:mms="http://schemas.infor.com/ips/MMS235_B/MMS235_B"><SOAP-ENV:Header><cred:lws><cred:company>' +
      this.curcono +
      '</cred:company><cred:division>' +
      this.curdivi +
      '</cred:division></cred:lws></SOAP-ENV:Header><SOAP-ENV:Body><mms:MMS235_B><mms:MMS235/></mms:MMS235_B></SOAP-ENV:Body></SOAP-ENV:Envelope>';
    // Create the relative URL to the ION API
    const url03 = 'M3/ips/service/MMS235_B';
    // Create HTTP GET request object
    const request03: IIonApiRequest = {
      method: 'POST',
      url: url03,
      headers,
      source: 'qq',
      body: subr03,
    };
    return request03;
  }

  triggerBusinessContext_01(refresh) {
    try {
      var type = 'inforBusinessContext';
      var data = {
        screenId: 'm3_GrowerReturns',
        entities: [
          {
            entityType: 'Refresh_Widget',
            accountingEntity: this.curcono + '_' + this.curdivi,
            visible: true,
            id1: refresh,
            drillbackURL:
              '?LogicalId=lid://infor.m3.m3&program=OIS390&fieldNames=W1REPN,400000047,W1CUNO,,WWWHLO,SNV,WFCRSB,0,WTCRSB,2&includeStartPanel=True&source=MForms&requirePanel=True&sortingOrder=1&tableName=OCHEAD&keys=OCCONO,' +
              this.curcono +
              ',OCWHLO,+,OCREPN,+,OCCUNO,+&startpanel=B',
          },
        ],
        session: {
          cono: this.curcono,
          divi: this.curdivi,
          panel: 'OIA390BC',
          iid: '6eb46647a42c3420e89dfc2650dfefd2',
          lng: 'GB',
          jobid: '627347afbac5465fa0f6080584053574',
          chgby: '',
          url: '',
          dsep: '.',
          moddate: '',
          user: 'Remco Driessen',
          userid: 'RDRIESSEN',
          df: 'MMDDYY',
          regdate: '',
        },
        program: 'MMS235',
        panel: 'B1',
        screenIdBase: 'MMS235',
      };

      window.parent['infor'].companyon.client.registerMessageHandler;
      window.parent['infor'].companyon.client.sendMessage(type, data);
    } catch (err) {
      //Odin.Log.error("Error in MainCtrl_triggerBusinessContext: " + err);
    }
  }

  setattribute(AGATNR: any, AGATID: any, AGATVA: any) {
    this.userService.getUserContext().subscribe(
      (context) => {
        const input = new MIRecord();
        input.setString('ATNR', AGATNR);
        input.setString('ATID', AGATID);
        input.setString('ATVA', AGATVA);
        const request: IMIRequest = {
          program: 'ATS101MI',
          transaction: 'SetAttrValue',
          record: input,
          maxReturnedRecords: 1000,
        };
        this.miService.execute(request).subscribe(
          (response: IMIResponse) => {
            if (!response.hasError()) {
            } else {
            }
          },
          (error) => {
            //  this.openError02(error.errorMessage);
          },
        );
      },
      (error) => {},
    );
  }

  iCFI3: any;
  iUNMS: any;
  iITDS: any;
  iITNO: any;

  userContext = {} as IUserContext;
  currentCONO: any;
  currentDIVI: any;
  userDateFmt: any;
  isBusy = false;
  dialog?: SohoMessageRef;
  company: string;
  division: string;
  language: string;
  currentCompany: string;
  currentDivision: string;
  currentLanguage: string;
  usid: string;
  curcono: string;
  curdivi: string;

  constructor(
    private cd: ChangeDetectorRef,
    private notificationService: SohoNotificationService,
    private dataService: DataService,
    private modalService: SohoModalDialogService,
    private toastService: SohoToastService,
    private globalStore: GlobalStore,
    private applicationService: ApplicationService,
    private ionApiService: IonApiService,
    private interactionService: InteractionService,
    private route: ActivatedRoute,
    private router: Router,
    private _interactionService: InteractionService,
    private miService: MIService,
    private userService: UserService,
    private messageService: SohoMessageService,
  ) {
    this.userService.getUserContext().subscribe(
      (userContext: IUserContext) => {
        this.userContext = userContext;
        const lang = userContext.currentLanguage;
        const divi = userContext.currentDivision;
        this.curcono = userContext.currentCompany;
        this.curdivi = userContext.currentDivision;
        const usid = userContext.USID;
      },
      (errorContext: IUserContext) => {
        // Handle error
      },
    );
  }

  updateUserValues(userContext: IUserContext) {
    this.company = userContext.company;
    this.division = userContext.division;
    this.language = userContext.language;

    this.usid = userContext.USID;

    this.currentCompany = userContext.currentCompany;
    this.currentDivision = userContext.currentDivision;
    this.currentLanguage = userContext.currentLanguage;
  }

  ngOnInit(): void {
    this.interactionService.Message$.subscribe((message) => {
      if (message.split('~')[0] === 'itno') {
        this.iITNO = message.split('~')[1];
        this.sbn = true;
      }

      if (message.split('~')[0] === 'puno') {
        this.iPUNO = message.split('~')[1];
      }

      if (message.split('~')[0] === 'pvar') {
        this.iPVAR = message.split('~')[1];
      }

      if (message.split('~')[0] === 'itds') {
        this.oITDS = message.split('~')[1];
      }
      if (message.split('~')[0] === 'bano') {
        this.iBANO = message.split('~')[1];
      }
      if (message.split('~')[0] === 'rpqa') {
        this.iRVQA = message.split('~')[1];
      }
      if (message.split('~')[0] === 'csett') {
        this.iCSETT = parseFloat(message.split('~')[1]).toFixed(0);
      }
      if (message.split('~')[0] === 'aprice') {
        this.iAPRICE = '£ ' + message.split('~')[1];
      }
      if (message.split('~')[0] === 'fgtp') {
        this.iFGTP = message.split('~')[1];
      }
      if (message.split('~')[0] === 'atnr') {
        this.iATNR = message.split('~')[1];
      }
      if (message.split('~')[0] === 'vhr01') {
        this.iVHR01 = message.split('~')[1];
      }
      if (message.split('~')[0] === 'vhr02') {
        this.iVHR02 = message.split('~')[1];
      }
      if (message.split('~')[0] === 'vhr03') {
        this.iVHR03 = message.split('~')[1];
      }
      if (message.split('~')[0] === 'vhr04') {
        this.iVHR04 = message.split('~')[1];
      }
      if (message.split('~')[0] === 'vhp01') {
        this.iVHP01 = message.split('~')[1];
      }
      if (message.split('~')[0] === 'vhp02') {
        this.iVHP02 = message.split('~')[1];
      }
      if (message.split('~')[0] === 'vhp03') {
        this.iVHP03 = message.split('~')[1];
      }
      if (message.split('~')[0] === 'vhp04') {
        this.iVHP04 = message.split('~')[1];
      }
      if (message.split('~')[0] === 'vhl01') {
        this.iVHL01 = message.split('~')[1];
      }
      if (message.split('~')[0] === 'vhl02') {
        this.iVHL02 = message.split('~')[1];
      }
      if (message.split('~')[0] === 'vhl03') {
        this.iVHL03 = message.split('~')[1];
      }
      if (message.split('~')[0] === 'vhl04') {
        this.iVHL04 = message.split('~')[1];
      }
      if (message.split('~')[0] === 'itgr') {
        this.iITGR = message.split('~')[1];
      }
      if (message.split('~')[0] === 'mowaste') {
        this.iMOWASTE = message.split('~')[1];
      }
      if (message.split('~')[0] === 'thres') {
        this.iTHRES = message.split('~')[1];
      }

      if (message.split('~')[0] === 'osett') {
        this.iSETQTY = message.split('~')[1];
      }

      if (message.split('~')[0] === 'variety') {
        this.iVARIETY = message.split('~')[1];
      }
      if (message.split('~')[0] === 'field') {
        this.iFIELD = message.split('~')[1];
      }
      if (message.split('~')[0] === 'growername') {
        this.iGrowername = message.split('~')[1];
      }
      if (message.split('~')[0] === 'growerarea') {
        this.iGrowerArea = message.split('~')[1];
      }
      if (message.split('~')[0] === 'icrop') {
        this.iCrop = message.split('~')[1];
      }
      if (message.split('~')[0] === 'freebuy') {
        this.iFreeBuy = message.split('~')[1];
      }
      if (message.split('~')[0] === 'contract') {
        this.iContract = message.split('~')[1];
      }
      if (message.split('~')[0] === 'contractperc') {
        this.iContractPerc = message.split('~')[1];
      }
      if (message.split('~')[0] === 'assignedp') {
        this.iAssignedP = message.split('~')[1];
      }
      if (message.split('~')[0] === 'issued') {
        this.iIssued = message.split('~')[1];
      }
      if (message.split('~')[0] === 'sold') {
        this.iSold = message.split('~')[1];
      }
      if (message.split('~')[0] === 'mo') {
        this.iMO = message.split('~')[1];
      }
      if (message.split('~')[0] === 'porec') {
        this.iPOREC = message.split('~')[1];
      }

      if (message.split('~')[0] === 'icalcinv') {
        this.iCALCINV = parseFloat(message.split('~')[1]).toFixed(2);
      }

      if (message.split('~')[0] === 'iprojectedinv') {
        this.iPVAL = message.split('~')[1];
      }

      if (message.split('~')[0] === 'ipackedbs2') {
        this.iPACKEDBS2 = message.split('~')[1];
      }

      if (message.split('~')[0] === 'icalcvar') {
        this.iCALCVAR = message.split('~')[1];
      }

      if (message.split('~')[0] === 'idkg') {
        this.iDKG = message.split('~')[1];
      }

      if (message.split('~')[0] === 'idpc') {
        this.iDPC = message.split('~')[1];
      }

      if (message.split('~')[0] === 'size') {
        this.iSIZE = message.split('~')[1];
      }
      if (message.split('~')[0] === 'showb') {
        this.show1 = true;
      }

      if (message.split('~')[0] === 'unders') {
        this.iUNDER = message.split('~')[1];
      }

      if (message.split('~')[0] === 'overs') {
        this.iOVER = message.split('~')[1];
      }

      if (message.split('~')[0] === 'ipriceover') {
        if (message.split('~')[1] !== undefined) {
          this.iAssignedPOver = parseFloat(message.split('~')[1]);
        }
      }
      if (message.split('~')[0] === 'ipriceunder') {
        if (message.split('~')[1] !== undefined) {
          this.iAssignedPUnder = parseFloat(message.split('~')[1]);
        }
      }

      if (message.split('~')[0] === 'igrvar') {
        this.iGRVAR = message.split('~')[1];
      }

      setTimeout(() => {
        this.ioverq = 0;
        this.iunderq = 0;

        this.ioverq = (parseFloat(this.iOVER) * this.iAssignedPOver).toFixed(2);
        this.iunderq = (parseFloat(this.iUNDER) * this.iAssignedPUnder).toFixed(
          2,
        );
      }, 2000);
    });
  }

  closeapp() {
    const message = JSON.stringify({
      type: 'unload-tab',
      data: {
        tabId: document.body.getAttribute('h5tab'),
      },
    });
    window.parent.postMessage(message);
  }

  openError02(errormessage) {
    const buttons = [
      {
        text: 'Close',
        click: (_e: any, modal: any) => {
          modal.close(true);
          (this.dialog as any) = null;
        },
        isDefault: true,
      },
    ];

    this.dialog = this.messageService
      .error()
      .title('<span>Info</span>')
      .message(errormessage)
      .buttons(buttons)
      .beforeOpen(() => {
        console.log('before open');
        return true;
      })
      .beforeClose(() => {
        console.log('before close');
        return true;
      })
      .open();
  }
}
