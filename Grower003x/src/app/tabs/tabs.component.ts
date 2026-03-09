import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
  ViewContainerRef,
  ViewChild,
  Inject,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import {
  CoreBase,
  IMIRequest,
  IMIResponse,
  MIRecord,
  IUserContext,
} from '@infor-up/m3-odin';
import {
  MIService,
  UserService,
  ApplicationService,
  DatePipe,
} from '@infor-up/m3-odin-angular';
import {
  SohoDataGridComponent,
  SohoMessageService,
  SohoModalDialogService,
  SohoBusyIndicatorDirective,
  SohoIconUtils,
  SohoMessageRef,
  SohoDataGridService,
  SohoToastService,
  SohoModalDialogRef,
  SohoTabsComponent,
} from 'ids-enterprise-ng';
import { InteractionService } from '../interaction.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  of,
  Observable,
  BehaviorSubject,
  lastValueFrom,
  isObservable,
  firstValueFrom,
} from 'rxjs';
import { enableDebugTools } from '@angular/platform-browser';
import { GlobalStore } from '../../store/global-store';
import { DataService } from '../data.service';
import { formatDate } from '@angular/common';
import { ParserError } from '@angular/compiler';

//datagrid column formatters
const customp01Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};

const CustomButton3 = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span><button style="color:blue">${value}</button></span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};

const customp02Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp03Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp04Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp05Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp06Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp07Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};

const customp09Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp09aFormatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp09bFormatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};

const customp10Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp11Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp12Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp12bFormatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp12xFormatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp13Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};

const customp16Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp17Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp18Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp19Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};

const customp21Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp22Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};
const customp23Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};

const customp25Formatter = function (
  row: any,
  cell: any,
  value: any,
  col: any,
  item: any,
  api: any,
) {
  value = `<span>${value}</span>`;
  return Soho.Formatters.Text(row, cell, value, col, item, api);
};

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [DatePipe],
  template:
    '<button soho-button="icon" icon="settings" (click)="onClick($event)" title="{{args?.row}} . {{args.cell}}"></button>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent
  extends CoreBase
  implements OnInit, OnDestroy, AfterViewInit
{
  suppinv01: string;
  toastId: void;

  public valx = 30;
  valx1: number;
  exceed: boolean;
  sstat: any;
  selected_lot: any;
  selected_lot02: any;
  loading = false;
  reportlength: number;
  grogress: number;
  progress: any;
  ap01: string;
  ap02: string;
  private loadingToastId: string | null = null;
  ap03: string;
  ap04: string;
  createe = false;
  PCDO: any;
  growerarea: any;

  private loadRunId = 0;

  suno: string;
  issued: void;
  issued1: string;
  flag: any;
  receipts: any;
  ridn: any;
  progress1 = 0;
  prog = false;
  mowastage: number;
  respGR001: IMIResponse;
  issued01: any;
  respGR002: IMIResponse;
  respGR003: IMIResponse;
  finreceipt: any;
  setqty: number;
  setqty1: string;
  mowaste: any;
  respGR001A: IMIResponse;
  instock: any;
  mowastage1: string;
  sISSU: any;
  respGR004A: IMIResponse;
  respGR004: IMIResponse;
  grower = '';
  ordertype = '';
  sPUNO: any;
  total_issued: number;
  finorder: any;
  POReceipt: number;
  lotnumber: any;
  threshold: any;
  po1: boolean;
  itemgroup: any;
  POLine: any;
  respGR001B: IMIResponse;
  purchase_price: any;
  agreement: any;
  respGR_PRICE01: IMIResponse;
  supplier: any;
  contract_percentage = 0;
  contract_price: any;
  freebuyqty: any;
  GRVAL2: any;
  contractqty: any;
  freebuy_price: any;
  assignedprice = 0;
  todays_date: any;
  fromdate: any;
  todate: any;
  curdateYYYMMDD: string;
  cropcycle: any;
  cropcycle_agreement_percentage: string;
  cropcycle_agreement_price: string;
  region: any;
  regions: string;
  sMOWaste: any;
  sContractPercentage: any;
  sContractQty: any;
  sContractPrice: any;
  sFreeBuyPrice: any;
  sFreeBuyQty: any;
  sAssignedPrice: any;
  sIssuedQTY: any;
  sItemGroup: any;
  sMOType: any;
  respGR_PRICE01A: IMIResponse;
  sCalcSettledQty: any;
  freebuy_percentage: number;
  freebuy_percent: number;
  grower_percent: number;
  contract_percent: number;
  assignedprice1: string;
  respGR0041: IMIResponse;
  sold: number;
  respGR0041a: unknown;
  GRVAL: number;

  respGR0042: IMIResponse;
  VHR01: any;
  VHR02: any;
  MORIDN: string;
  sReceivedMOItem1: any;
  sReceivedMOItem2: any;
  sContractQTY: any;
  sFreebuyQTY: any;
  respGR0021: IMIResponse;
  receivedsize: number;
  MTRIDX: any;
  respGR003x: IMIResponse;
  finreceiptx: any;
  wastex: number;
  issued2: number;
  sizelot: any;
  faci1: any;
  issued1a: number;
  trtp: any;
  respGR0027: IMIResponse;
  respGR003X: IMIResponse;
  finorderx: string;
  issued1b: any;
  finreceipty: any;
  good: number;
  issued1c: any;
  mowastage_BS3: any;
  deduct: any;
  deduv: any;
  settledqty01: number;
  setqtyx: any;
  mowastage_BS4: string;
  setqtyx1: number;
  sReceivedMOItem3: any;
  sReceivedMOItem4: any;
  sReceiptItem1: any;
  sReceiptItem2: any;
  sReceiptItem3: any;
  sReceiptItem4: any;
  sReceiptPrice1: any;
  sReceiptPrice2: any;
  sReceiptPrice3: any;
  sReceiptPrice4: any;
  receiptitem01 = '';
  receiptitem02 = '';
  receiptitem03 = '';
  receiptitem04 = '';
  VHR03: any;
  VHR04: any;
  VHR01X: any;
  VHR02X: any;
  VHR03X: any;
  VHR04X: any;
  ban2: string;
  placeholder: ViewContainerRef;
  objIndex1: number;
  selwarehouse: any;
  iITNO: any;
  totalvalue: any;
  gstvalue: any;
  netvalue: any;
  curdatemn: any;
  curdatemm: any;
  ina: any;
  difference: any;
  selinvoice1: any;
  items02: any[] = [];
  items03: any[] = [];

  gstvalue1: any;
  gstvalue2: string;
  sITNO: any;
  sBANO: any;
  potype: any;
  spotprice: any;
  overwrite_setqty: string;
  ovsetqty: number;
  receivedcost: any;
  GRVAR: any;
  respGR0089: IMIResponse;
  variety: any;
  respGR004x: IMIResponse;
  sumUN: any;
  sumOV: null;
  sumk: any;
  acti: string;
  show1: boolean;
  supplierinvoice: any;
  flag1: string;
  whlox = '';
  respCurVal: IMIResponse;
  qcurValue: any;
  items01y: any[] = [];
  items02y: any[] = [];
  items03y: any[] = [];
  qPriceOver: any;
  qPriceUnder: any;
  price_variety: any;
  activeTabId: any;
  suppinvoice: any;
  checkBox2Value: any;
  id2: any;
  xPUNO: any;
  xPNLI: any;
  xBLOC: any;
  curcono: string;
  iBLSB: any;
  GRVAL3: string;
  directx: any;
  direct: string;
  PodDLIX: any;
  PodIVQA: any;
  respGR004xx: IMIResponse;
  tFACI: any;

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

    console.log('tabidds ' + this.acti);
    this.globalStore.setTAB(this.acti);
  }

  exportToExcel() {
    this.datagrid02?.exportToCsv('GR- Processed');
  }

  @ViewChild(SohoTabsComponent, { static: false })
  tabsComponent: SohoTabsComponent;

  @ViewChild('NonPackedoutDataGrid') datagrid02: SohoDataGridComponent;

  @ViewChild('modalPlaceholder', { read: ViewContainerRef, static: true })
  modalPlaceholder?: ViewContainerRef;

  datagridOptions01: SohoDataGridOptions;
  datagridOptions02: SohoDataGridOptions;
  datagridOptions03: SohoDataGridOptions;
  items: any[] = [];
  detailItem: any;
  hasSelected: boolean;
  isBusy = false;
  isDetailBusy = false;
  dialog?: SohoMessageRef;
  userContext = {} as IUserContext;
  company: string;
  currentCompany: string;
  division: string;
  currentDivision: string;
  language: string;
  currentLanguage: string;
  private maxRecords = 2000;
  private pageSize = 20;
  counter: number;
  itemresult: any[] = [];
  MMS240A: any[] = [];
  selitem: string;
  ATS101A: any[] = [];
  public model = {
    item01: null,
    item02: null,
    item03: null,
    startfrom: null,
    startto: null,
    item04: null,
    item01sav: null,
    item02sav: null,
    item03sav: null,
  };
  facility01: string;
  visible?: boolean;
  gridOptions?: SohoDataGridOptions = undefined;
  scan: string;
  name: any;
  isShown = false;
  isDisabled = true;
  selatt: any;
  selval: any;
  attributeno: any;
  itno: any;
  fuds: any;
  field01: any;
  bref: any;
  itds: any;
  tab: any;
  oLNAM: number;
  oTRNO: any;
  oTRDT: any;
  supplier01: string;
  items01: any[] = [];
  planfrom: string;

  headCUAM: string;
  curfaci: string;
  curwhlo: string;
  A230: any;
  totamount: number;
  running: number;
  oWGHTN: number;
  oRATEN: number;
  runningS: string;
  A230N: number;
  invfrom: string;
  invfromO: string;
  actfrom: string;
  actfromO: string;
  vatamount: number;
  oPROC: any;
  selinvoice: any;
  oSUNM: any;
  vatamountL: number;
  vatamnt: number;
  oSUCL: any;
  oPUNO: any;
  oPNLI: any;
  TRNO: any;
  oSINO: any;
  oTRNOx: number;
  GST_Total: number;
  oOVHE: any;
  car_CEID: string;
  car_CDSE: string;
  bkid: any;

  constructor(
    private datePipe: DatePipe,
    private router: Router,
    private dataService: DataService,
    private applicationService: ApplicationService,
    private ApplicationService: ApplicationService,
    private route: ActivatedRoute,
    private toastService: SohoToastService,
    private globalStore: GlobalStore,
    private interactionService: InteractionService,
    private miService: MIService,
    private userService: UserService,
    private messageService: SohoMessageService,
    private modalService: SohoModalDialogService,
  ) {
    super('TabsComponent');

    this.userService.getUserContext().subscribe(
      (userContext: IUserContext) => {
        this.userContext = userContext;
        this.updateUserValues(userContext);
      },
      (error) => {},
    );

    this.initGrid02();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const tabsAPI = (this.tabsComponent as any).tabsAPI;
      if (tabsAPI) {
        const activeTab = tabsAPI.getActiveTab();
        if (activeTab) {
          this.activeTabId = activeTab.id;
          console.log('Initial active tab:', this.activeTabId);
        }
      }
    });
  }

  ngOnDestroy(): void {}

  updateUserValues(userContext: IUserContext) {
    this.company = userContext.company;
    this.division = userContext.division;
    this.language = userContext.language;

    this.currentCompany = userContext.currentCompany;
    this.currentDivision = userContext.currentDivision;
    this.currentLanguage = userContext.currentLanguage;
    this.curwhlo = userContext.WHLO;
    this.curfaci = userContext.FACI;
    this.curcono = userContext.currentCompany;
  }

  onCellChange01(e: SohoDataGridCellChangeEvent) {
    console.log('cellchange');
    console.log('api: ', e.api);
    console.log('rowData: ', e.rowData.F2BLSB);

    this.xPUNO = e.rowData.F2PUNO;
    this.xPNLI = e.rowData.F2PNLI;
    this.xBLOC = e.rowData.F2PUNO;

    this.checkPPS118Block(this.xPUNO);
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
            'F2FGTP',
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

                if (item.F2FGTP !== '99') {
                  this.unlock(
                    item.F2DIVI,
                    item.F2PUNO,
                    item.F2PNLI,
                    item.F2PNLS,
                    item.F2REPN,
                  );
                }
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

  onCheckboxChange(item: any, value: any) {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.interactionService.Message$.subscribe((message) => {
      if (message === 'exportexcel') {
        this.exportexcel();
      }
      if (message.split('~')[0] === 'supplier_details') {
        this.suno = message.split('~')[1];
        //    this.listItems1();
      }

      if (message.split('~')[0] === 'warehouse_details') {
        this.whlox = message.split('~')[1];
      }

      if (message.split('~')[0] === 'applyfilters') {
        this.items01 = [];
        this.items02 = [];
        this.items03 = [];
        this.listItems1();
      }

      if (message.split('~')[0] === 'refresh001') {
        this.items01 = [];
        this.items02 = [];
        this.items03 = [];

        this.updateGridData();

        setTimeout(() => {
          this.listItems1();
        }, 1000);
      }

      if (message.split('~')[0] === 'recalculate') {
        setTimeout(() => {
          this.listItems1x();
        }, 1000);
      }

      console.log(message);
    });
  }

  //run outer loop for summarized FGRECL PPS118 records lower than status 80, AND lotqty = 0 AND completion flag is set to 1

  private toPromise<T = any>(val: any): Promise<T> {
    if (val && typeof val.then === 'function') return val as Promise<T>;
    if (val && isObservable(val)) return firstValueFrom(val as any);
    return Promise.resolve(val as T); // sync/void
  }

  private chunk<T>(arr: T[], size: number): T[][] {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }

  async listItems1() {
    const runId = ++this.loadRunId; // 👈 add this line

    this.toastService.show({
      title: 'Running..',
      message: 'Grower Returns create report in progress...',
    });

    this.items01 = [];
    this.items02 = [];
    this.items03 = [];

    // tune this based on backend limits / UX
    const CONCURRENCY = 10;

    try {
      // 1) Get user context
      const context = await firstValueFrom(this.userService.getUserContext());

      // 2) Build MI request
      const input = new MIRecord();
      input.setString('SUNO', this.globalStore.getSUNO());
      input.setString('WHLO', this.globalStore.getWHLO());
      input.setString('TRDF', this.globalStore.getfrom());
      input.setString('TRDT', this.globalStore.getto());

      const request: IMIRequest = {
        program: 'EXT800MI',
        transaction: 'GRProcessed',
        record: input,
        outputFields: [
          'DIVI',
          'SUNO',
          'PUNO',
          'PNLI',
          'FGTP',
          'BLSB',
          'REND',
          'PCDO',
          'AGNB',
          'ORTY',
          'LINT',
          'ITNO',
          'ITGR',
          'ITDS',
          'CFI4',
          'RPQA',
          'SCOC',
          'BANO',
          'FACI',
          'TRDT',
          'ATV1',
          'GRWR',
          'GRWA',
          'ATV2',
          'ATV3',
          'ATV4',
          'ATV7',
          'ATV6',
          'ISSU',
          'GOOD',
          'PVAR',
          'WBS3',
          'ISSB',
          'PAB2',
          'MOW1',
          'DEDU',
          'DEDV',
          'SETQ',
          'SEQ2',
          'SOLD',
          'ORT2',
          'VHR1',
          'VHR2',
          'VHR3',
          'ATNR',
          'VHR4',
          'VHP1',
          'VHP2',
          'VHP3',
          'VHP4',
          'VHL1',
          'VHL2',
          'VHL3',
          'VHL4',
          'STQT',
          'CQTY',
          'CPCT',
          'FQTY',
          'CPRF',
          'LINT',
          'TRTP',
          'ORTP',
          'APRF',
          'FPRF',
          'UDN1',
          'GVAL',
          'GVAR',
          'ATNR',
        ],
        maxReturnedRecords: 7000,
      };

      // 3) Execute MI request
      const response: IMIResponse = await firstValueFrom(
        this.miService.execute(request),
      );

      if (response.hasError()) {
        //   this.toastService?.show?.('Failed to load items. Please try again.');

        this.toastService.show({
          title: 'Alert...',
          message: 'Failed to load items. Please try again',
        });

        return;
      }

      const items = response.items ?? [];
      if (!items.length) {
        this.toastService.show({
          title: 'Alert...',
          message: 'No items found for selected criteria',
        });

        return;
      }

      // 4) Build an array of "subcall runners" (each returns a Promise)
      const runners: Array<() => Promise<any>> = items.map((item) => {
        return async () => {
          // (Keep your variable declarations if needed elsewhere)
          let finreceipt = 0;
          let finreceipty = 0;
          let issued1c = 0;
          let sold = 0;

          let POReceiptLocal = item.RPQA;
          let lotnumber = item.BANO;
          let threshold = item.ATV7;
          let itemgroup = item.ITGR;
          let PO = item.PUNO;
          let POLine = item.PNLI;
          let supplier = item.SUNO;
          let cropcycle = item.ATV4;
          let faci1 = item.FACI;
          let variety = item.ATV2;
          let trtp = item.TRTP;
          let growerarea = '';
          let region = item.CFI3;
          let sstat = item.FGTP;
          let receivedcost = item.SCOC;
          let contract_price = item.CPRF;
          let freebuy_price = item.FPRF;

          let issued1a = 0;
          let mowastage = 0;
          let mowastage1 = '';
          let mowastage_BS3: number | null = null;
          let mowastage_BS4: number | null = null;
          let deduv: number | null = null;
          let deduct: number | null = null;

          const call =
            item.TRTP !== 'BS3'
              ? this.checkMO11nonBS3(
                  item.PVAR,
                  item.GRWA,
                  item.GRWR,
                  item.ATNR,
                  item.ITNO,
                  item.ITDS,
                  item.CFI4,
                  item.TRDT,
                  item.ATV1,
                  item.ATV2,
                  item.ATV3,
                  item.ATV4,
                  item.ATV5,
                  item.ATV6,
                  item.ATV7,
                  item.SEQ2,
                  item.UDN1,
                  item.ORTY,
                  item.SCOC,
                  item.BLSB,
                  item.STQT,
                  item.AGNB,
                  item.CPCT,
                  item.SOLD,
                  item.BANO,
                  item.RPQA,
                  item.ITGR,
                  item.PUNO,
                  item.PNLI,
                  item.SUNO,
                  item.FACI,
                  item.TRTP,
                  item.CFI3,
                  item.FGTP,
                  item.CPRF,
                  item.FPRF,
                  item.APRF,
                  runId,
                )
              : this.checkMO11BS3(
                  item.PVAR,
                  item.GRWA,
                  item.GRWR,
                  item.ATNR,
                  item.ITNO,
                  item.ITDS,
                  item.CFI4,
                  item.TRDT,
                  item.ATV1,
                  item.ATV2,
                  item.ATV3,
                  item.ATV4,
                  item.ATV5,
                  item.ATV6,
                  item.ATV7,
                  item.SEQ2,
                  item.UDN1,
                  item.ORTY,
                  item.SCOC,
                  item.BLSB,
                  item.STQT,
                  item.AGNB,
                  item.CPCT,
                  item.SOLD,
                  item.BANO,
                  item.RPQA,
                  item.ITGR,
                  item.PUNO,
                  item.PNLI,
                  item.SUNO,
                  item.FACI,
                  item.TRTP,
                  item.CFI3,
                  item.FGTP,
                  item.CPRF,
                  item.FPRF,
                  item.APRF,
                  runId,
                );

          return this.toPromise(call);
        };
      });

      // 5) Run with capped concurrency using batching + allSettled
      const batches = this.chunk(runners, CONCURRENCY);
      let totalFailures = 0;

      for (const batch of batches) {
        const settled = await Promise.allSettled(batch.map((run) => run()));
        totalFailures += settled.filter((r) => r.status === 'rejected').length;
        // (optional) update a progress bar here using counts from settled.length
      }

      // 6) Toast outcome
      if (totalFailures > 0) {
        //     this.toastService?.show?.(
        //    `All items processed, but ${totalFailures} subcall(s) failed.`
        //   );
      } else {
        this.toastService.show({
          title: 'Info.',
          message: 'Grower Returns Bench refreshed..',
        });
      }
    } catch (err) {
      console.error(err);

      this.toastService.show({
        title: 'Alert...',
        message: 'Unexpected error....',
      });
    }
  }

  checkMO11BS3(
    PVAR: any,
    GRWA: any,
    GRWR: any,
    ATNR: any,
    ITNO: any,
    ITDS: any,
    CFI4: any,
    TRDT: any,
    ATV1: any,
    ATV2: any,
    ATV3: any,
    ATV4: any,
    ATV5: any,
    ATV6: any,
    ATV7: any,
    SEQ2: any,
    UDN1: any,
    ORTY: any,
    SCOC: any,
    BLSB: any,
    STQT: any,
    AGNB: any,
    CPCT: any,
    SOLD: any,
    BANO: any,
    RPQA: any,
    ITGR: any,
    PUNO: any,
    PNLI: any,
    SUNO: any,
    FACI: any,
    TRTP: any,
    CFI3: any,
    FGTP: any,
    CPRF: any,
    FPRF: any,
    APRF: any,
    runId: number,
  ) {
    const myRunId = runId; // 👈 add this line at the top of the body
    let issued1a = 0;
    let issued1c = 0;
    let total_issued = 0;
    let flag1 = 'not started';
    let finreceipt = 0; // -> PACKEDBS2
    let good = 0; // from EndProd
    let pcdo = '0';

    let wastex = 0;

    let GRVAR;
    let GRVAL2;

    // locals to avoid relying on unset this.*

    let mowastage = 0;
    let mowastage1 = '';
    let mowastage_BS3 = null;
    let mowastage_BS4 = null;
    let deduct = 0;
    let setqtyx1 = 0;
    let setqty1;
    let deduv;
    let contractqty;
    let freebuyqty;
    let po1;
    let setqtyx;

    let receiptitem01;
    let receiptitem02;
    let receiptitem03;
    let receiptitem04;

    let VHR01X;
    let VHR02X;
    let VHR03X;
    let VHR04X;

    const mtrIds: string[] = [];

    this.userService.getUserContext().subscribe(() => {
      // === Pass 1: From parent lot, TTYP=11 to collect finished orders & totals
      const input = new MIRecord();
      input.setString('F_BANO', BANO);
      input.setString('T_BANO', BANO);
      input.setString('F_TTYP', '11');
      input.setString('T_TTYP', '11');

      const request: IMIRequest = {
        program: 'CMS100MI',
        transaction: 'Lst_GR_MITTRA',
        record: input,
        outputFields: [
          'MTTRQT',
          'VHREND',
          'MTRIDN',
          'VHMFNO',
          'VHORTY',
          'MTTRTP',
          'VHPCDO',
        ],
        maxReturnedRecords: 7000,
      };

      this.miService.execute(request).subscribe((response: IMIResponse) => {
        if (response.hasError()) return;

        for (let i = 0; i < response.items.length; i++) {
          const itemx = response.items[i];
          flag1 = itemx.VHREND ?? flag1;
          pcdo = itemx.VHPCDO ?? pcdo;

          if (flag1 === '1') {
            flag1 = 'Finish marked';
          } else {
            flag1 = 'In progress';
          }

          if (itemx.VHREND === '1') {
            const q = Number(itemx.MTTRQT) || 0;
            total_issued += q;
            issued1a -= q;
            if (itemx.MTRIDN) mtrIds.push(String(itemx.MTRIDN));
          }
        }

        if (FGTP === '00') {
          FGTP = '00- Not qualified for self billing';
        }
        if (FGTP === '10') {
          FGTP = '10- Qualified, but with incorrect data';
        }
        if (FGTP === '15') {
          FGTP = '15- Qualified, but required info missing';
        }
        if (FGTP === '20') {
          FGTP = '20- Ready for transfer to APS450';
        }
        if (FGTP === '80') {
          FGTP = '80- Transferred to APS450';
        }
        if (FGTP === '90') {
          FGTP = '90- Invoice updated to Accounts Payable';
        }
        if (FGTP === '99') {
          FGTP = '99- Reversed in PPS330';
        }

        if (pcdo === '0') {
          pcdo = '0- No';
        }
        if (pcdo === '1') {
          pcdo = '1- Yes, order costing';
        }
        if (pcdo === '2') {
          pcdo = '2- Yes, production stats';
        }
        if (pcdo === '9') {
          pcdo = '9- Yes, both been performed';
        }

        if (BLSB === '1') {
          BLSB = 'YES';
        } else {
          BLSB = '';
        }

        if (myRunId !== this.loadRunId) {
          // This belongs to an old Apply click – ignore it completely.
          return;
        }

        // === Case A: no finished orders -> push immediately
        if (mtrIds.length === 0) {
          this.items02.push({
            A2PVAR: PVAR,
            GROWAR: GRWA,
            VHPCDO: pcdo,
            VHL01: this.ap01,
            VHL02: this.ap02,
            OBLINT: this.directx,
            VHL03: this.ap03,
            F2BLSB: BLSB,
            VHL04: this.ap04,
            VHREND: flag1,
            MLSTQT: STQT,
            SSTAT: FGTP,
            VHP01: this.receiptitem01,
            POexceed: this.exceed,
            VHP02: this.receiptitem02,
            VHP03: this.receiptitem03,
            VHP04: this.receiptitem04,
            SETQTY1: this.setqtyx,
            DEDUV: this.deduv,
            MOWaste1: this.mowastage_BS3,
            ISSUEDBS2: this.issued1c,
            DEDUP: this.deduct,
            F2SUNO: SUNO,
            GRVAL: this.GRVAL2,
            PACKEDBS2: 0,
            VHR01: this.VHR01X,
            VHR02: this.VHR02X,
            VHR03: this.VHR03X,
            VHR04: this.VHR04X,
            F2PNLI: PNLI,
            IBAGNB: AGNB,
            GOOD: 0,
            WASTEBS3: this.wastex,
            CPCT: CPCT,
            CPRRF: CPRF,
            SOLD: SOLD,
            IBPUPR: UDN1,
            CQTY: contractqty,
            FPRRF: FPRF,
            APRRF: APRF,
            FQTY: freebuyqty,
            MMITGR: ITGR,
            ISSU: issued1a,
            F2RPQA: RPQA,
            FIN: total_issued,
            GROWER: GRWR,
            F2PUNO: PUNO,
            LMATNR: ATNR,
            AVAL: this.instock,
            F2FACI: FACI,
            GRVAR: this.GRVAR,
            F2ITNO: ITNO,
            MMITDS: ITDS,
            MMCFI4: CFI4,
            F2TRDT: TRDT,
            F2BANO: BANO,
            A1ATVA: ATV1,
            A2ATVA: ATV2,
            A3ATVA: ATV3,
            A4ATVA: ATV4,
            A5ATVA: ATV5,
            VHORTY: TRTP,
            MOWASTE: this.mowastage1,
            A6ATVN: ATV6,
            A7ATVN: ATV7,
            SQTRQT: this.setqty1,
            SETQTY2: SEQ2,
            IBUDN1: UDN1,
            IAORTY: ORTY,
            F2SCOC: SCOC,
          });

          this.createe = true;
          this.updateGridData();
          return;
        }

        // === Case B: finished orders exist
        // For each finished order (MTRIDN), we fetch EndProd to get size-lots,
        // then for each size-lot run Lst_GR_MITTRA (TTYP=11) to get the *real* MTRIDNs,
        // then for each of those run Lst_GR_MITTR2V2 to sum TTYP 10/12 into finreceipt.
        let remainingOrders = mtrIds.length;

        for (const orderId of mtrIds) {
          this.userService.getUserContext().subscribe(() => {
            // 1) EndProd -> size-lots + GOOD
            const epIn = new MIRecord();
            epIn.setString('F_MFHL', orderId);
            epIn.setString('T_MFHL', orderId);
            epIn.setString('F_BANO', '1');

            const epReq: IMIRequest = {
              program: 'CMS100MI',
              transaction: 'Lst_GR_EndProd',
              record: epIn,
              outputFields: ['VHFACI', 'VHBANO', 'VHPRNO', 'VHMFNO', 'VHRVQA'],
              maxReturnedRecords: 7000,
            };

            this.miService.execute(epReq).subscribe((epRes: IMIResponse) => {
              // Collect unique size-lots from EndProd and accumulate GOOD
              const sizeLots: string[] = [];
              if (!epRes.hasError()) {
                for (let j = 0; j < epRes.items.length; j++) {
                  const r = epRes.items[j];
                  good += Number(r.VHRVQA) || 0;

                  if (j === 0) {
                    receiptitem01 = r.VHPRNO;
                  }
                  if (j === 1) {
                    receiptitem02 = r.VHPRNO;
                  }
                  if (j === 2) {
                    receiptitem03 = r.VHPRNO;
                  }
                  if (j === 3) {
                    receiptitem04 = r.VHPRNO;
                  }

                  if (j === 0) {
                    VHR01X = r.VHRVQA;
                  }
                  if (j === 1) {
                    VHR02X = r.VHRVQA;
                  }
                  if (j === 2) {
                    VHR03X = r.VHRVQA;
                  }
                  if (j === 3) {
                    VHR04X = r.VHRVQA;
                  }

                  const lot = (r.VHBANO || '').trim();
                  if (lot) sizeLots.push(lot);
                }
              }

              // Unique size-lots
              const uniqLots = Array.from(new Set(sizeLots));

              // If no size-lots came back, just treat this order as done
              if (uniqLots.length === 0) {
                remainingOrders--;
                if (remainingOrders === 0) {
                  // all orders done -> push once

                  if (FGTP === '00') {
                    FGTP = '00- Not qualified for self billing';
                  }
                  if (FGTP === '10') {
                    FGTP = '10- Qualified, but with incorrect data';
                  }
                  if (FGTP === '15') {
                    FGTP = '15- Qualified, but required info missing';
                  }
                  if (FGTP === '20') {
                    FGTP = '20- Ready for transfer to APS450';
                  }
                  if (FGTP === '80') {
                    FGTP = '80- Transferred to APS450';
                  }
                  if (FGTP === '90') {
                    FGTP = '90- Invoice updated to Accounts Payable';
                  }
                  if (FGTP === '99') {
                    FGTP = '99- Reversed in PPS330';
                  }

                  if (pcdo === '0') {
                    pcdo = '0- No';
                  }
                  if (pcdo === '1') {
                    pcdo = '1- Yes, order costing';
                  }
                  if (pcdo === '2') {
                    pcdo = '2- Yes, production stats';
                  }
                  if (pcdo === '9') {
                    pcdo = '9- Yes, both been performed';
                  }

                  if (BLSB === '1') {
                    BLSB = 'YES';
                  } else {
                    BLSB = '';
                  }

                  if (myRunId !== this.loadRunId) {
                    // This belongs to an old Apply click – ignore it completely.
                    return;
                  }

                  this.items02.push({
                    A2PVAR: PVAR,
                    GROWAR: GRWA,
                    VHPCDO: pcdo,
                    VHL01: this.ap01,
                    VHL02: this.ap02,
                    OBLINT: this.directx,
                    VHL03: this.ap03,
                    F2BLSB: BLSB,
                    VHL04: this.ap04,
                    VHREND: flag1,
                    MLSTQT: STQT,
                    SSTAT: FGTP,
                    VHP01: receiptitem01,
                    POexceed: this.exceed,
                    VHP02: receiptitem02,
                    VHP03: receiptitem03,
                    VHP04: receiptitem04,
                    SETQTY1: setqtyx,
                    DEDUV: deduv,
                    MOWaste1: mowastage_BS3,
                    ISSUEDBS2: issued1c,
                    DEDUP: deduct,
                    F2SUNO: SUNO,
                    GRVAL: GRVAL2,
                    PACKEDBS2: finreceipt,
                    VHR01: VHR01X,
                    VHR02: VHR02X,
                    VHR03: VHR03X,
                    VHR04: VHR04X,
                    F2PNLI: PNLI,
                    IBAGNB: AGNB,
                    GOOD: good,
                    WASTEBS3: this.wastex,
                    CPCT: CPCT,
                    CPRRF: CPRF,
                    SOLD: SOLD,
                    IBPUPR: UDN1,
                    CQTY: contractqty,
                    FPRRF: FPRF,
                    APRRF: APRF,
                    FQTY: freebuyqty,
                    MMITGR: ITGR,
                    ISSU: issued1a,
                    F2RPQA: RPQA,
                    FIN: total_issued,
                    GROWER: GRWR,
                    F2PUNO: PUNO,
                    LMATNR: ATNR,
                    AVAL: this.instock,
                    F2FACI: FACI,
                    GRVAR: GRVAR,
                    F2ITNO: ITNO,
                    MMITDS: ITDS,
                    MMCFI4: CFI4,
                    F2TRDT: TRDT,
                    F2BANO: BANO,
                    A1ATVA: ATV1,
                    A2ATVA: ATV2,
                    A3ATVA: ATV3,
                    A4ATVA: ATV4,
                    A5ATVA: ATV5,
                    VHORTY: TRTP,
                    MOWASTE: mowastage1,
                    A6ATVN: ATV6,
                    A7ATVN: ATV7,
                    SQTRQT: this.setqty1,
                    SETQTY2: SEQ2,
                    IBUDN1: UDN1,
                    IAORTY: ORTY,
                    F2SCOC: SCOC,
                  });
                  this.createe = true;
                  this.updateGridData();
                }
                return;
              }

              // For this order, track completion across ALL size-lots and their MITTR2 chains
              let remainingLots = uniqLots.length;

              for (const lot of uniqLots) {
                this.userService.getUserContext().subscribe(() => {
                  // 2) For each size-lot -> Lst_GR_MITTRA (TTYP=11) to get MTRIDNs
                  const mittraIn = new MIRecord();
                  mittraIn.setString('F_BANO', lot);
                  mittraIn.setString('T_BANO', lot);
                  mittraIn.setString('F_TTYP', '11');
                  mittraIn.setString('T_TTYP', '11');

                  const mittraReq: IMIRequest = {
                    program: 'CMS100MI',
                    transaction: 'Lst_GR_MITTRA',
                    record: mittraIn,
                    outputFields: ['MTTRQT', 'VHREND', 'MTRIDN', 'MTTRTP'],
                    maxReturnedRecords: 7000,
                  };

                  this.miService
                    .execute(mittraReq)
                    .subscribe((mittraRes: IMIResponse) => {
                      const childMtrIds: string[] = [];
                      if (!mittraRes.hasError()) {
                        for (let a = 0; a < mittraRes.items.length; a++) {
                          const m = mittraRes.items[a];
                          issued1c -= Number(m.MTTRQT) || 0;
                          if (m.MTRIDN) childMtrIds.push(String(m.MTRIDN));
                        }
                      }

                      // If no child MTRIDs for this lot, the lot chain is done
                      if (childMtrIds.length === 0) {
                        remainingLots--;
                        if (remainingLots === 0) {
                          remainingOrders--;
                          if (remainingOrders === 0) {
                            // all chains done -> push once
                            if (FGTP === '00') {
                              FGTP = '00- Not qualified for self billing';
                            }
                            if (FGTP === '10') {
                              FGTP = '10- Qualified, but with incorrect data';
                            }
                            if (FGTP === '15') {
                              FGTP = '15- Qualified, but required info missing';
                            }
                            if (FGTP === '20') {
                              FGTP = '20- Ready for transfer to APS450';
                            }
                            if (FGTP === '80') {
                              FGTP = '80- Transferred to APS450';
                            }
                            if (FGTP === '90') {
                              FGTP = '90- Invoice updated to Accounts Payable';
                            }
                            if (FGTP === '99') {
                              FGTP = '99- Reversed in PPS330';
                            }

                            if (pcdo === '0') {
                              pcdo = '0- No';
                            }
                            if (pcdo === '1') {
                              pcdo = '1- Yes, order costing';
                            }
                            if (pcdo === '2') {
                              pcdo = '2- Yes, production stats';
                            }
                            if (pcdo === '9') {
                              pcdo = '9- Yes, both been performed';
                            }

                            if (BLSB === '1') {
                              BLSB = 'YES';
                            } else {
                              BLSB = '';
                            }

                            if (myRunId !== this.loadRunId) {
                              // This belongs to an old Apply click – ignore it completely.
                              return;
                            }

                            this.items02.push({
                              A2PVAR: PVAR,
                              GROWAR: GRWA,
                              VHPCDO: pcdo,
                              VHL01: this.ap01,
                              VHL02: this.ap02,
                              OBLINT: this.directx,
                              VHL03: this.ap03,
                              F2BLSB: BLSB,
                              VHL04: this.ap04,
                              VHREND: flag1,
                              MLSTQT: STQT,
                              SSTAT: FGTP,
                              VHP01: receiptitem01,
                              POexceed: this.exceed,
                              VHP02: receiptitem02,
                              VHP03: receiptitem03,
                              VHP04: receiptitem04,
                              SETQTY1: setqtyx,
                              DEDUV: deduv,
                              MOWaste1: mowastage_BS3,
                              ISSUEDBS2: issued1c,
                              DEDUP: deduct,
                              F2SUNO: SUNO,
                              GRVAL: GRVAL2,
                              PACKEDBS2: finreceipt,
                              VHR01: VHR01X,
                              VHR02: VHR02X,
                              VHR03: VHR03X,
                              VHR04: VHR04X,
                              F2PNLI: PNLI,
                              IBAGNB: AGNB,
                              GOOD: good,
                              WASTEBS3: this.wastex,
                              CPCT: CPCT,
                              CPRRF: CPRF,
                              APRRF: APRF,
                              SOLD: SOLD,
                              IBPUPR: UDN1,
                              CQTY: contractqty,
                              FPRRF: FPRF,
                              FQTY: freebuyqty,
                              MMITGR: ITGR,
                              ISSU: issued1a,
                              F2RPQA: RPQA,
                              FIN: total_issued,
                              GROWER: GRWR,
                              F2PUNO: PUNO,
                              LMATNR: ATNR,
                              AVAL: this.instock,
                              F2FACI: FACI,
                              GRVAR: GRVAR,
                              F2ITNO: ITNO,
                              MMITDS: ITDS,
                              MMCFI4: CFI4,
                              F2TRDT: TRDT,
                              F2BANO: BANO,
                              A1ATVA: ATV1,
                              A2ATVA: ATV2,
                              A3ATVA: ATV3,
                              A4ATVA: ATV4,
                              A5ATVA: ATV5,
                              VHORTY: TRTP,
                              MOWASTE: this.mowastage1,
                              A6ATVN: ATV6,
                              A7ATVN: ATV7,
                              SQTRQT: this.setqty1,
                              SETQTY2: SEQ2,
                              IBUDN1: UDN1,
                              IAORTY: ORTY,
                              F2SCOC: SCOC,
                            });
                            this.createe = true;
                            this.updateGridData();
                          }
                        }
                        return;
                      }

                      // 3) For each child MTRID -> Lst_GR_MITTR2V2 to sum TTYP 10/12 into finreceipt
                      let remainingChild = childMtrIds.length;

                      for (const childId of childMtrIds) {
                        this.userService.getUserContext().subscribe(() => {
                          const tr2In = new MIRecord();
                          tr2In.setString('MTRIDN', childId);
                          const tr2Req: IMIRequest = {
                            program: 'CMS100MI',
                            transaction: 'Lst_GR_MITTR2V2',
                            record: tr2In,
                            outputFields: [
                              'MTTRQT',
                              'VHREND',
                              'MTRIDN',
                              'MTTTYP',
                              'MTITNO',
                            ],
                            maxReturnedRecords: 7000,
                          };

                          this.miService
                            .execute(tr2Req)
                            .subscribe((tr2Res: IMIResponse) => {
                              if (!tr2Res.hasError()) {
                                for (let k = 0; k < tr2Res.items.length; k++) {
                                  const y = tr2Res.items[k];
                                  if (y.MTTTYP === '10' || y.MTTTYP === '12') {
                                    finreceipt += Number(y.MTTRQT) || 0;
                                  }
                                }
                              }

                              // child finished
                              remainingChild--;
                              if (remainingChild === 0) {
                                // all children for this lot finished
                                remainingLots--;
                                if (remainingLots === 0) {
                                  // all lots for this order finished
                                  remainingOrders--;
                                  if (remainingOrders === 0) {
                                    if (issued1c !== 0) {
                                      mowastage_BS3 = (
                                        (1 - finreceipt / issued1c) *
                                        100
                                      ).toFixed(2);
                                    }

                                    if (mowastage_BS3 > parseFloat(ATV7)) {
                                      deduct = Number(
                                        (mowastage_BS3 - ATV7).toFixed(3),
                                      );
                                    } else {
                                      deduct = 0;
                                    }
                                    wastex = issued1a - good;

                                    //deduction in kilos
                                    deduv = Math.round(
                                      (deduct / 100) * issued1c,
                                    );
                                    setqtyx = Math.round(
                                      Number(good) - Number(deduv),
                                    );

                                    if (parseFloat(RPQA) > this.setqtyx) {
                                      this.exceed = true;
                                    } else {
                                      this.exceed = false;
                                    }

                                    if (setqtyx) {
                                      contractqty = (
                                        (setqtyx * CPCT) /
                                        100
                                      ).toFixed(0);
                                    }
                                    if (setqtyx) {
                                      freebuyqty = (
                                        setqtyx *
                                        ((100 - CPCT) / 100)
                                      ).toFixed(0);
                                    }

                                    GRVAL2 = (
                                      parseFloat(APRF) * parseFloat(setqtyx)
                                    ).toFixed(2);

                                    //    if (
                                    //      potype == 'SPT' &&
                                    //      spotprice > 0
                                    //    ) {
                                    //      this.GRVAL2 = (
                                    //        parseFloat(this.spotprice) *
                                    //        this.setqtyx
                                    //      ).toFixed(2);
                                    //    }

                                    if (ORTY == 'SPT' && parseFloat(UDN1) > 0) {
                                      GRVAL2 = (
                                        parseFloat(UDN1) * parseFloat(RPQA)
                                      ).toFixed(2);
                                    }

                                    if (
                                      ORTY == 'SPT' &&
                                      parseFloat(UDN1) > 0 &&
                                      parseFloat(SEQ2) !== 0
                                    ) {
                                      GRVAL2 = (
                                        parseFloat(UDN1) * parseFloat(SEQ2)
                                      ).toFixed(2);
                                    }

                                    if (parseFloat(SEQ2) !== 0) {
                                      GRVAL2 = (
                                        parseFloat(APRF) * parseFloat(SEQ2)
                                      ).toFixed(2);
                                    }

                                    GRVAR = (
                                      parseFloat(GRVAL2) -
                                      parseFloat(SCOC) * parseFloat(RPQA)
                                    ).toFixed(2);

                                    // everything done -> push once
                                    if (FGTP === '00') {
                                      FGTP =
                                        '00- Not qualified for self billing';
                                    }
                                    if (FGTP === '10') {
                                      FGTP =
                                        '10- Qualified, but with incorrect data';
                                    }
                                    if (FGTP === '15') {
                                      FGTP =
                                        '15- Qualified, but required info missing';
                                    }
                                    if (FGTP === '20') {
                                      FGTP = '20- Ready for transfer to APS450';
                                    }
                                    if (FGTP === '80') {
                                      FGTP = '80- Transferred to APS450';
                                    }
                                    if (FGTP === '90') {
                                      FGTP =
                                        '90- Invoice updated to Accounts Payable';
                                    }
                                    if (FGTP === '99') {
                                      FGTP = '99- Reversed in PPS330';
                                    }

                                    if (pcdo === '0') {
                                      pcdo = '0- No';
                                    }
                                    if (pcdo === '1') {
                                      pcdo = '1- Yes, order costing';
                                    }
                                    if (pcdo === '2') {
                                      pcdo = '2- Yes, production stats';
                                    }
                                    if (pcdo === '9') {
                                      pcdo = '9- Yes, both been performed';
                                    }

                                    if (BLSB === '1') {
                                      BLSB = 'YES';
                                    } else {
                                      BLSB = '';
                                    }

                                    if (myRunId !== this.loadRunId) {
                                      // This belongs to an old Apply click – ignore it completely.
                                      return;
                                    }

                                    this.items02.push({
                                      A2PVAR: PVAR,
                                      GROWAR: GRWA,
                                      VHPCDO: pcdo,
                                      VHL01: this.ap01,
                                      VHL02: this.ap02,
                                      OBLINT: this.directx,
                                      VHL03: this.ap03,
                                      F2BLSB: BLSB,
                                      VHL04: this.ap04,
                                      VHREND: flag1,
                                      MLSTQT: STQT,
                                      SSTAT: FGTP,
                                      VHP01: receiptitem01,
                                      POexceed: this.exceed,
                                      VHP02: receiptitem02,
                                      VHP03: receiptitem03,
                                      VHP04: receiptitem04,
                                      SETQTY1: setqtyx,
                                      DEDUV: deduv,
                                      MOWaste1: mowastage_BS3,
                                      ISSUEDBS2: issued1c,
                                      DEDUP: deduct,
                                      F2SUNO: SUNO,
                                      GRVAL: GRVAL2,
                                      PACKEDBS2: finreceipt,
                                      VHR01: VHR01X,
                                      VHR02: VHR02X,
                                      VHR03: VHR03X,
                                      VHR04: VHR04X,
                                      F2PNLI: PNLI,
                                      IBAGNB: AGNB,
                                      GOOD: good,
                                      WASTEBS3: wastex,
                                      CPCT: CPCT,
                                      CPRRF: CPRF,
                                      SOLD: SOLD,
                                      IBPUPR: UDN1,
                                      CQTY: contractqty,
                                      FPRRF: FPRF,
                                      APRRF: APRF,
                                      FQTY: freebuyqty,
                                      MMITGR: ITGR,
                                      ISSU: issued1a,
                                      F2RPQA: RPQA,
                                      FIN: total_issued,
                                      GROWER: GRWR,
                                      F2PUNO: PUNO,
                                      LMATNR: ATNR,
                                      AVAL: this.instock,
                                      F2FACI: FACI,
                                      GRVAR: GRVAR,
                                      F2ITNO: ITNO,
                                      MMITDS: ITDS,
                                      MMCFI4: CFI4,
                                      F2TRDT: TRDT,
                                      F2BANO: BANO,
                                      A1ATVA: ATV1,
                                      A2ATVA: ATV2,
                                      A3ATVA: ATV3,
                                      A4ATVA: ATV4,
                                      A5ATVA: ATV5,
                                      VHORTY: TRTP,
                                      MOWASTE: mowastage1,
                                      A6ATVN: ATV6,
                                      A7ATVN: ATV7,
                                      SQTRQT: this.setqty1,
                                      SETQTY2: SEQ2,
                                      IBUDN1: UDN1,
                                      IAORTY: ORTY,
                                      F2SCOC: SCOC,
                                    });
                                    this.createe = true;
                                    this.updateGridData();
                                  }
                                }
                              }
                            });
                        });
                      } // end for each childId
                    });
                });
              } // end for each lot
            });
          });
        } // end for each orderId
      });
    });
  }

  checkMO11nonBS3(
    PVAR: any,
    GRWA: any,
    GRWR: any,
    ATNR: any,
    ITNO: any,
    ITDS: any,
    CFI4: any,
    TRDT: any,
    ATV1: any,
    ATV2: any,
    ATV3: any,
    ATV4: any,
    ATV5: any,
    ATV6: any,
    ATV7: any,
    SEQ2: any,
    UDN1: any,
    ORTY: any,
    SCOC: any,
    BLSB: any,
    STQT: any,
    AGNB: any,
    CPCT: any,
    SOLD: any,
    BANO: any,
    RPQA: any,
    ITGR: any,
    PUNO: any,
    PNLI: any,
    SUNO: any,
    FACI: any,
    TRTP: any,
    CFI3: any,
    FGTP: any,
    CPRF: any,
    FPRF: any,
    APRF: any,
    runId: number,
  ) {
    const myRunId = runId; // 👈 add this line at the top of the body
    let issued1a = 0;
    let total_issued = 0;
    let finreceipt = 0;

    // locals to avoid relying on unset this.*
    let pcdo = '0';
    let flag1 = 'not started';

    let mowastage = 0;
    let mowastage1 = '';
    let mowastage_BS3 = null;
    let mowastage_BS4 = null;
    let deduct = 0;
    let setqtyx1 = 0;
    let setqty1;
    let deduv;
    let po1;

    let setqtyx;
    let contractqty;
    let freebuyqty;

    let GRVAL2;
    let GRVAR;

    // collect finished orders (MTRIDN) for MITTRA2
    const mtrIds: string[] = [];

    this.userService.getUserContext().subscribe(() => {
      const input = new MIRecord();
      input.setString('F_BANO', BANO);
      input.setString('T_BANO', BANO);
      input.setString('F_TTYP', '11');
      input.setString('T_TTYP', '11');

      const request: IMIRequest = {
        program: 'CMS100MI',
        transaction: 'Lst_GR_MITTRA',
        record: input,
        outputFields: [
          'MTTRQT',
          'VHREND',
          'MTRIDN',
          'VHMFNO',
          'VHORTY',
          'MTTRTP',
          'VHPCDO',
        ],
        maxReturnedRecords: 7000,
      };

      this.miService.execute(request).subscribe((response: IMIResponse) => {
        if (response.hasError()) return;

        // pass 1: summarise TTYP 11 + collect order ids
        for (let i = 0; i < response.items.length; i++) {
          const itemx = response.items[i];

          flag1 = itemx.VHREND ?? flag1;
          pcdo = itemx.VHPCDO ?? pcdo;

          if (flag1 === '1') {
            flag1 = 'Finish marked';
          } else {
            flag1 = 'In progress';
          }

          if (itemx.VHREND === '1') {
            const q = Number(itemx.MTTRQT) || 0;
            total_issued += q;
            issued1a -= q;

            if (itemx.MTRIDN) {
              mtrIds.push(String(itemx.MTRIDN));
            }
          }
        }

        if (FGTP === '00') {
          FGTP = '00- Not qualified for self billing';
        }
        if (FGTP === '10') {
          FGTP = '10- Qualified, but with incorrect data';
        }
        if (FGTP === '15') {
          FGTP = '15- Qualified, but required info missing';
        }
        if (FGTP === '20') {
          FGTP = '20- Ready for transfer to APS450';
        }
        if (FGTP === '80') {
          FGTP = '80- Transferred to APS450';
        }
        if (FGTP === '90') {
          FGTP = '90- Invoice updated to Accounts Payable';
        }
        if (FGTP === '99') {
          FGTP = '99- Reversed in PPS330';
        }

        if (pcdo === '0') {
          pcdo = '0- No';
        }
        if (pcdo === '1') {
          pcdo = '1- Yes, order costing';
        }
        if (pcdo === '2') {
          pcdo = '2- Yes, production stats';
        }
        if (pcdo === '9') {
          pcdo = '9- Yes, both been performed';
        }

        console.log('vre ' + BANO + ' ' + BLSB);

        if (BLSB === '0') {
          BLSB = true;
        } else {
          BLSB = false;
        }

        console.log('vre ' + BANO + ' ' + BLSB);

        if (RPQA) {
          contractqty = ((RPQA * CPCT) / 100).toFixed(0);
        }
        if (RPQA) {
          freebuyqty = (RPQA * ((100 - CPCT) / 100)).toFixed(0);
        }

        GRVAL2 = (parseFloat(APRF) * parseFloat(RPQA)).toFixed(2);

        if (parseFloat(SEQ2) !== 0) {
          GRVAL2 = (parseFloat(APRF) * parseFloat(SEQ2)).toFixed(2);
        }

        if (ORTY == 'SPT' && parseFloat(UDN1) > 0) {
          GRVAL2 = (parseFloat(UDN1) * parseFloat(RPQA)).toFixed(2);
        }

        if (ORTY == 'SPT' && parseFloat(UDN1) > 0 && parseFloat(SEQ2) !== 0) {
          GRVAL2 = (parseFloat(UDN1) * parseFloat(SEQ2)).toFixed(2);
        }

        GRVAR = (
          parseFloat(GRVAL2) -
          parseFloat(SCOC) * parseFloat(RPQA)
        ).toFixed(2);

        if (myRunId !== this.loadRunId) {
          // This belongs to an old Apply click – ignore it completely.
          return;
        }

        // case A: no finished orders -> push once immediately (no receipts)
        if (mtrIds.length === 0) {
          this.items02.push({
            A2PVAR: PVAR,
            GROWAR: GRWA,
            VHPCDO: pcdo,
            VHL01: this.ap01,
            VHL02: this.ap02,
            OBLINT: this.directx,
            VHL03: this.ap03,
            F2BLSB: BLSB,
            VHL04: this.ap04,
            VHREND: flag1,
            MLSTQT: STQT,
            SSTAT: FGTP,
            VHP01: this.receiptitem01,
            POexceed: this.exceed,
            VHP02: this.receiptitem02,
            VHP03: this.receiptitem03,
            VHP04: this.receiptitem04,
            SETQTY1: RPQA,
            DEDUV: deduv,
            MOWaste1: mowastage_BS3,
            ISSUEDBS2: this.issued1c,
            DEDUP: deduct,
            F2SUNO: SUNO,
            GRVAL: GRVAL2,
            PACKEDBS2: 0, // no MITTRA2 receipts
            VHR01: this.VHR01X,
            VHR02: this.VHR02X,
            VHR03: this.VHR03X,
            VHR04: this.VHR04X,
            F2PNLI: PNLI,
            IBAGNB: AGNB,
            GOOD: this.good,
            WASTEBS3: this.wastex,
            CPCT: CPCT,
            CPRRF: CPRF, // fixed key (no CPRRF)
            SOLD: SOLD,
            IBPUPR: UDN1,
            CQTY: contractqty,
            FPRRF: FPRF, // fixed key (no FPRRF)
            FQTY: freebuyqty,
            APRRF: APRF,
            MMITGR: ITGR,
            ISSU: issued1a,
            F2RPQA: RPQA,
            FIN: total_issued, // total issued from TTYP 11
            GROWER: GRWR,
            F2PUNO: PUNO,
            LMATNR: ATNR,
            AVAL: this.instock,
            F2FACI: FACI,
            GRVAR: GRVAR,
            F2ITNO: ITNO,
            MMITDS: ITDS,
            MMCFI4: CFI4,
            F2TRDT: TRDT,
            F2BANO: BANO,
            A1ATVA: ATV1,
            A2ATVA: ATV2,
            A3ATVA: ATV3,
            A4ATVA: ATV4,
            A5ATVA: ATV5,
            VHORTY: TRTP,
            MOWASTE: this.mowastage1,
            A6ATVN: ATV6,
            A7ATVN: ATV7,
            SQTRQT: this.setqty1,
            SETQTY2: SEQ2,
            IBUDN1: UDN1,
            IAORTY: ORTY,
            F2SCOC: SCOC,
          });

          // write to grid for this lot
          this.createe = true;
          this.updateGridData();
          return;
        }

        // case B: finished orders exist -> run MITTRA2 for each, wait for all, then push once
        let remaining = mtrIds.length;

        for (const orderId of mtrIds) {
          this.userService.getUserContext().subscribe(() => {
            const input2 = new MIRecord();
            input2.setString('MTRIDN', orderId);
            const req2: IMIRequest = {
              program: 'CMS100MI',
              transaction: 'Lst_GR_MITTR2V2',
              record: input2,
              outputFields: ['MTTRQT', 'VHREND', 'MTRIDN', 'MTTTYP', 'MTITNO'],
              maxReturnedRecords: 7000,
            };

            this.miService.execute(req2).subscribe((res2: IMIResponse) => {
              if (!res2.hasError()) {
                for (let j = 0; j < res2.items.length; j++) {
                  const itemy = res2.items[j];
                  if (itemy.MTTTYP === '10' || itemy.MTTTYP === '12') {
                    finreceipt += Number(itemy.MTTRQT) || 0;
                  }
                }

                mowastage = 0;
                mowastage1 = '';
                mowastage_BS3 = null;
                mowastage_BS4 = null;
                deduct = 0;
                setqtyx1 = 0;
                setqty1;
                deduv;
                po1;
                setqtyx;

                console.log('bano ' + BANO);

                if (issued1a > 0) {
                  if (parseFloat(RPQA) > 0) {
                    mowastage_BS4 = (
                      100 -
                      (finreceipt / parseFloat(RPQA)) * 100
                    ).toFixed(2);
                  } else {
                    mowastage_BS4 = null;
                  }
                  mowastage_BS3 = parseFloat(mowastage_BS4);
                }

                if (mowastage_BS3 > parseFloat(ATV7)) {
                  deduct = Number((mowastage_BS3 - ATV7).toFixed(3));
                } else {
                  deduct = 0;
                }
                if (mowastage_BS3 > parseFloat(ATV7)) {
                  setqtyx1 =
                    parseFloat(RPQA) *
                    (1 - (mowastage_BS3 - parseFloat(ATV7)) / 100);
                  setqty1 = setqtyx1.toFixed(0);
                }
                if (mowastage_BS3 < parseFloat(ATV7)) {
                  setqtyx1 = parseFloat(RPQA);
                }

                po1 = isNaN(issued1a);
                if (po1 === true) {
                  setqty1 = RPQA;
                }
                setqtyx = parseFloat(setqty1).toFixed(0);

                //deduction in kilos
                deduv = ((deduct / 100) * issued1a).toFixed(0);
                setqtyx = (parseFloat(RPQA) - deduv).toFixed(0);

                console.log('ssw ' + RPQA + ' ' + deduv + ' ' + BANO);

                //Settled Qty can never be higher than the PO Receipt quantity for every lot number
                if (finreceipt > parseFloat(RPQA)) {
                  setqtyx = RPQA;
                }

                if (RPQA > this.setqtyx) {
                  this.exceed = true;
                } else {
                  this.exceed = false;
                }
              }

              if (setqtyx) {
                contractqty = ((setqtyx * CPCT) / 100).toFixed(0);
              }
              if (setqtyx) {
                freebuyqty = (setqtyx * ((100 - CPCT) / 100)).toFixed(0);
              }

              GRVAL2 = (parseFloat(APRF) * parseFloat(setqtyx)).toFixed(2);

              if (parseFloat(SEQ2) !== 0) {
                GRVAL2 = (parseFloat(APRF) * parseFloat(SEQ2)).toFixed(2);
              }

              if (ORTY == 'SPT' && parseFloat(UDN1) > 0) {
                GRVAL2 = (parseFloat(UDN1) * parseFloat(RPQA)).toFixed(2);
              }

              if (
                ORTY == 'SPT' &&
                parseFloat(UDN1) > 0 &&
                parseFloat(SEQ2) !== 0
              ) {
                GRVAL2 = (parseFloat(UDN1) * parseFloat(SEQ2)).toFixed(2);
              }

              GRVAR = (
                parseFloat(GRVAL2) -
                parseFloat(SCOC) * parseFloat(RPQA)
              ).toFixed(2);

              if (FGTP === '00') {
                FGTP = '00- Not qualified for self billing';
              }
              if (FGTP === '10') {
                FGTP = '10- Qualified, but with incorrect data';
              }
              if (FGTP === '15') {
                FGTP = '15- Qualified, but required info missing';
              }
              if (FGTP === '20') {
                FGTP = '20- Ready for transfer to APS450';
              }
              if (FGTP === '80') {
                FGTP = '80- Transferred to APS450';
              }
              if (FGTP === '90') {
                FGTP = '90- Invoice updated to Accounts Payable';
              }
              if (FGTP === '99') {
                FGTP = '99- Reversed in PPS330';
              }

              if (pcdo === '0') {
                pcdo = '0- No';
              }
              if (pcdo === '1') {
                pcdo = '1- Yes, order costing';
              }
              if (pcdo === '2') {
                pcdo = '2- Yes, production stats';
              }
              if (pcdo === '9') {
                pcdo = '9- Yes, both been performed';
              }

              console.log('vre ' + BANO + ' ' + BLSB);

              if (BLSB === '0') {
                BLSB = true;
              } else {
                BLSB = false;
              }

              console.log('vre ' + BANO + ' ' + BLSB);

              if (myRunId !== this.loadRunId) {
                // This belongs to an old Apply click – ignore it completely.
                return;
              }
              remaining--;
              if (remaining === 0) {
                // all MITTRA2 calls done -> push once with final finreceipt
                this.items02.push({
                  A2PVAR: PVAR,
                  GROWAR: GRWA,
                  VHPCDO: pcdo,
                  VHL01: this.ap01,
                  VHL02: this.ap02,
                  OBLINT: this.directx,
                  VHL03: this.ap03,
                  F2BLSB: BLSB,
                  VHL04: this.ap04,
                  VHREND: flag1,
                  MLSTQT: STQT,
                  SSTAT: FGTP,
                  VHP01: this.receiptitem01,
                  POexceed: this.exceed,
                  VHP02: this.receiptitem02,
                  VHP03: this.receiptitem03,
                  VHP04: this.receiptitem04,
                  SETQTY1: setqtyx,
                  DEDUV: deduv,
                  MOWaste1: mowastage_BS3,
                  ISSUEDBS2: this.issued1c,
                  DEDUP: deduct,
                  F2SUNO: SUNO,
                  GRVAL: GRVAL2,
                  PACKEDBS2: finreceipt, // summed receipts (TTYP 10/12)
                  VHR01: this.VHR01X,
                  VHR02: this.VHR02X,
                  VHR03: this.VHR03X,
                  VHR04: this.VHR04X,
                  F2PNLI: PNLI,
                  IBAGNB: AGNB,
                  GOOD: this.good,
                  WASTEBS3: this.wastex,
                  CPCT: CPCT,
                  CPRRF: CPRF,
                  SOLD: SOLD,
                  IBPUPR: UDN1,
                  CQTY: contractqty,
                  FPRRF: FPRF,
                  APRRF: APRF,
                  FQTY: freebuyqty,
                  MMITGR: ITGR,
                  ISSU: issued1a,
                  F2RPQA: RPQA,
                  FIN: total_issued, // total issued from TTYP 11
                  GROWER: GRWR,
                  F2PUNO: PUNO,
                  LMATNR: ATNR,
                  AVAL: this.instock,
                  F2FACI: FACI,
                  GRVAR: GRVAR,
                  F2ITNO: ITNO,
                  MMITDS: ITDS,
                  MMCFI4: CFI4,
                  F2TRDT: TRDT,
                  F2BANO: BANO,
                  A1ATVA: ATV1,
                  A2ATVA: ATV2,
                  A3ATVA: ATV3,
                  A4ATVA: ATV4,
                  A5ATVA: ATV5,
                  VHORTY: TRTP,
                  MOWASTE: mowastage1,
                  A6ATVN: ATV6,
                  A7ATVN: ATV7,
                  SQTRQT: this.setqty1,
                  SETQTY2: SEQ2,
                  IBUDN1: UDN1,
                  IAORTY: ORTY,
                  F2SCOC: SCOC,
                });

                // write to grid for this lot
                this.createe = true;
                this.updateGridData();
              }
            });
          });
        }
      });
    });
  }

  async listItems1x() {
    this.items02y = [];

    // tune this based on backend limits / UX
    const CONCURRENCY = 10;

    try {
      // 1) Get user context
      const context = await firstValueFrom(this.userService.getUserContext());

      // 2) Build MI request
      const input = new MIRecord();
      input.setString('SUNO', this.globalStore.getSUNO());
      input.setString('WHLO', this.globalStore.getWHLO());
      input.setString('TRDF', this.globalStore.getfrom());
      input.setString('TRDT', this.globalStore.getto());
      input.setString('BANO', this.sBANO);

      const request: IMIRequest = {
        program: 'EXT800MI',
        transaction: 'GRProcessed',
        record: input,
        outputFields: [
          'DIVI',
          'SUNO',
          'PUNO',
          'PNLI',
          'FGTP',
          'BLSB',
          'REND',
          'PCDO',
          'AGNB',
          'ORTY',
          'LINT',
          'ITNO',
          'ITGR',
          'ITDS',
          'CFI4',
          'RPQA',
          'SCOC',
          'BANO',
          'FACI',
          'TRDT',
          'ATV1',
          'GRWR',
          'GRWA',
          'ATV2',
          'ATV3',
          'ATV4',
          'ATV7',
          'ATV6',
          'ISSU',
          'GOOD',
          'PVAR',
          'WBS3',
          'ISSB',
          'PAB2',
          'MOW1',
          'DEDU',
          'DEDV',
          'SETQ',
          'SEQ2',
          'SOLD',
          'ORT2',
          'VHR1',
          'VHR2',
          'VHR3',
          'ATNR',
          'VHR4',
          'VHP1',
          'VHP2',
          'VHP3',
          'VHP4',
          'VHL1',
          'VHL2',
          'VHL3',
          'VHL4',
          'STQT',
          'CQTY',
          'CPCT',
          'FQTY',
          'CPRF',
          'LINT',
          'TRTP',
          'ORTP',
          'APRF',
          'FPRF',
          'UDN1',
          'GVAL',
          'GVAR',
          'ATNR',
        ],
        maxReturnedRecords: 7000,
      };

      // 3) Execute MI request
      const response: IMIResponse = await firstValueFrom(
        this.miService.execute(request),
      );

      if (response.hasError()) {
        //   this.toastService?.show?.('Failed to load items. Please try again.');

        this.toastService.show({
          title: 'Alert...',
          message: 'Failed to load items. Please try again',
        });

        return;
      }

      const items = response.items ?? [];
      if (!items.length) {
        this.toastService.show({
          title: 'Alert...',
          message: 'No items found for selected criteria',
        });

        return;
      }

      // 4) Build an array of "subcall runners" (each returns a Promise)
      const runners: Array<() => Promise<any>> = items.map((item) => {
        return async () => {
          // (Keep your variable declarations if needed elsewhere)
          let finreceipt = 0;
          let finreceipty = 0;
          let issued1c = 0;
          let sold = 0;

          let POReceiptLocal = item.RPQA;
          let lotnumber = item.BANO;
          let threshold = item.ATV7;
          let itemgroup = item.ITGR;
          let PO = item.PUNO;
          let POLine = item.PNLI;
          let supplier = item.SUNO;
          let cropcycle = item.ATV4;
          let faci1 = item.FACI;
          let variety = item.ATV2;
          let trtp = item.TRTP;
          let growerarea = '';
          let region = item.CFI3;
          let sstat = item.FGTP;
          let receivedcost = item.SCOC;
          let contract_price = item.CPRF;
          let freebuy_price = item.FPRF;

          let issued1a = 0;
          let mowastage = 0;
          let mowastage1 = '';
          let mowastage_BS3: number | null = null;
          let mowastage_BS4: number | null = null;
          let deduv: number | null = null;
          let deduct: number | null = null;

          const call =
            item.TRTP !== 'BS3'
              ? this.checkMO11nonBS3x(
                  item.PVAR,
                  item.GRWA,
                  item.GRWR,
                  item.ATNR,
                  item.ITNO,
                  item.ITDS,
                  item.CFI4,
                  item.TRDT,
                  item.ATV1,
                  item.ATV2,
                  item.ATV3,
                  item.ATV4,
                  item.ATV5,
                  item.ATV6,
                  item.ATV7,
                  item.SEQ2,
                  item.UDN1,
                  item.ORTY,
                  item.SCOC,
                  item.BLSB,
                  item.STQT,
                  item.AGNB,
                  item.CPCT,
                  item.SOLD,
                  item.BANO,
                  item.RPQA,
                  item.ITGR,
                  item.PUNO,
                  item.PNLI,
                  item.SUNO,
                  item.FACI,
                  item.TRTP,
                  item.CFI3,
                  item.FGTP,
                  item.CPRF,
                  item.FPRF,
                  item.APRF,
                )
              : this.checkMO11BS3x(
                  item.PVAR,
                  item.GRWA,
                  item.GRWR,
                  item.ATNR,
                  item.ITNO,
                  item.ITDS,
                  item.CFI4,
                  item.TRDT,
                  item.ATV1,
                  item.ATV2,
                  item.ATV3,
                  item.ATV4,
                  item.ATV5,
                  item.ATV6,
                  item.ATV7,
                  item.SEQ2,
                  item.UDN1,
                  item.ORTY,
                  item.SCOC,
                  item.BLSB,
                  item.STQT,
                  item.AGNB,
                  item.CPCT,
                  item.SOLD,
                  item.BANO,
                  item.RPQA,
                  item.ITGR,
                  item.PUNO,
                  item.PNLI,
                  item.SUNO,
                  item.FACI,
                  item.TRTP,
                  item.CFI3,
                  item.FGTP,
                  item.CPRF,
                  item.FPRF,
                  item.APRF,
                );

          return this.toPromise(call);
        };
      });

      // 5) Run with capped concurrency using batching + allSettled
      const batches = this.chunk(runners, CONCURRENCY);
      let totalFailures = 0;

      for (const batch of batches) {
        const settled = await Promise.allSettled(batch.map((run) => run()));
        totalFailures += settled.filter((r) => r.status === 'rejected').length;
        // (optional) update a progress bar here using counts from settled.length
      }

      // 6) Toast outcome
      if (totalFailures > 0) {
        //     this.toastService?.show?.(
        //    `All items processed, but ${totalFailures} subcall(s) failed.`
        //   );
      } else {
        this.toastService.show({
          title: 'Info.',
          message: 'Grower Returns Bench refreshed..',
        });
      }
    } catch (err) {
      console.error(err);

      this.toastService.show({
        title: 'Alert...',
        message: 'Unexpected error....',
      });
    }
  }

  checkMO11BS3x(
    PVAR: any,
    GRWA: any,
    GRWR: any,
    ATNR: any,
    ITNO: any,
    ITDS: any,
    CFI4: any,
    TRDT: any,
    ATV1: any,
    ATV2: any,
    ATV3: any,
    ATV4: any,
    ATV5: any,
    ATV6: any,
    ATV7: any,
    SEQ2: any,
    UDN1: any,
    ORTY: any,
    SCOC: any,
    BLSB: any,
    STQT: any,
    AGNB: any,
    CPCT: any,
    SOLD: any,
    BANO: any,
    RPQA: any,
    ITGR: any,
    PUNO: any,
    PNLI: any,
    SUNO: any,
    FACI: any,
    TRTP: any,
    CFI3: any,
    FGTP: any,
    CPRF: any,
    FPRF: any,
    APRF: any,
  ) {
    let issued1a = 0;
    let issued1c = 0;
    let total_issued = 0;
    let flag1 = 'not started';
    let finreceipt = 0; // -> PACKEDBS2
    let good = 0; // from EndProd
    let pcdo = '0';

    let wastex = 0;

    let GRVAR;
    let GRVAL2;

    // locals to avoid relying on unset this.*

    let mowastage = 0;
    let mowastage1 = '';
    let mowastage_BS3 = null;
    let mowastage_BS4 = null;
    let deduct = 0;
    let setqtyx1 = 0;
    let setqty1;
    let deduv;
    let contractqty;
    let freebuyqty;
    let po1;
    let setqtyx;

    const mtrIds: string[] = [];

    this.userService.getUserContext().subscribe(() => {
      // === Pass 1: From parent lot, TTYP=11 to collect finished orders & totals
      const input = new MIRecord();
      input.setString('F_BANO', BANO);
      input.setString('T_BANO', BANO);
      input.setString('F_TTYP', '11');
      input.setString('T_TTYP', '11');

      const request: IMIRequest = {
        program: 'CMS100MI',
        transaction: 'Lst_GR_MITTRA',
        record: input,
        outputFields: [
          'MTTRQT',
          'VHREND',
          'MTRIDN',
          'VHMFNO',
          'VHORTY',
          'MTTRTP',
          'VHPCDO',
        ],
        maxReturnedRecords: 7000,
      };

      this.miService.execute(request).subscribe((response: IMIResponse) => {
        if (response.hasError()) return;

        for (let i = 0; i < response.items.length; i++) {
          const itemx = response.items[i];
          flag1 = itemx.VHREND ?? flag1;
          pcdo = itemx.VHPCDO ?? pcdo;

          if (flag1 === '1') {
            flag1 = 'Finish marked';
          } else {
            flag1 = 'In progress';
          }

          if (itemx.VHREND === '1') {
            const q = Number(itemx.MTTRQT) || 0;
            total_issued += q;
            issued1a -= q;
            if (itemx.MTRIDN) mtrIds.push(String(itemx.MTRIDN));
          }
        }

        if (FGTP === '00') {
          FGTP = '00- Not qualified for self billing';
        }
        if (FGTP === '10') {
          FGTP = '10- Qualified, but with incorrect data';
        }
        if (FGTP === '15') {
          FGTP = '15- Qualified, but required info missing';
        }
        if (FGTP === '20') {
          FGTP = '20- Ready for transfer to APS450';
        }
        if (FGTP === '80') {
          FGTP = '80- Transferred to APS450';
        }
        if (FGTP === '90') {
          FGTP = '90- Invoice updated to Accounts Payable';
        }
        if (FGTP === '99') {
          FGTP = '99- Reversed in PPS330';
        }

        if (pcdo === '0') {
          pcdo = '0- No';
        }
        if (pcdo === '1') {
          pcdo = '1- Yes, order costing';
        }
        if (pcdo === '2') {
          pcdo = '2- Yes, production stats';
        }
        if (pcdo === '9') {
          pcdo = '9- Yes, both been performed';
        }

        if (BLSB === '1') {
          BLSB = 'YES';
        } else {
          BLSB = '';
        }

        // === Case A: no finished orders -> push immediately
        if (mtrIds.length === 0) {
          this.items02y.push({
            A2PVAR: PVAR,
            GROWAR: GRWA,
            VHPCDO: pcdo,
            VHL01: this.ap01,
            VHL02: this.ap02,
            OBLINT: this.directx,
            VHL03: this.ap03,
            F2BLSB: BLSB,
            VHL04: this.ap04,
            VHREND: flag1,
            MLSTQT: STQT,
            SSTAT: FGTP,
            VHP01: this.receiptitem01,
            POexceed: this.exceed,
            VHP02: this.receiptitem02,
            VHP03: this.receiptitem03,
            VHP04: this.receiptitem04,
            SETQTY1: this.setqtyx,
            DEDUV: this.deduv,
            MOWaste1: this.mowastage_BS3,
            ISSUEDBS2: this.issued1c,
            DEDUP: this.deduct,
            F2SUNO: SUNO,
            GRVAL: this.GRVAL2,
            PACKEDBS2: 0,
            VHR01: this.VHR01X,
            VHR02: this.VHR02X,
            VHR03: this.VHR03X,
            VHR04: this.VHR04X,
            F2PNLI: PNLI,
            IBAGNB: AGNB,
            GOOD: 0,
            WASTEBS3: this.wastex,
            CPCT: CPCT,
            CPRRF: CPRF,
            SOLD: SOLD,
            IBPUPR: UDN1,
            CQTY: contractqty,
            FPRRF: FPRF,
            APRRF: APRF,
            FQTY: freebuyqty,
            MMITGR: ITGR,
            ISSU: issued1a,
            F2RPQA: RPQA,
            FIN: total_issued,
            GROWER: GRWR,
            F2PUNO: PUNO,
            LMATNR: ATNR,
            AVAL: this.instock,
            F2FACI: FACI,
            GRVAR: this.GRVAR,
            F2ITNO: ITNO,
            MMITDS: ITDS,
            MMCFI4: CFI4,
            F2TRDT: TRDT,
            F2BANO: BANO,
            A1ATVA: ATV1,
            A2ATVA: ATV2,
            A3ATVA: ATV3,
            A4ATVA: ATV4,
            A5ATVA: ATV5,
            VHORTY: TRTP,
            MOWASTE: this.mowastage1,
            A6ATVN: ATV6,
            A7ATVN: ATV7,
            SQTRQT: this.setqty1,
            SETQTY2: SEQ2,
            IBUDN1: UDN1,
            IAORTY: ORTY,
            F2SCOC: SCOC,
          });

          this.createe = true;

          // 3) Safely replace or append items01y[0] into items01 by F2BANO
          const newItem = this.items02y?.[0];
          if (newItem && newItem.F2BANO) {
            const idx = this.items02.findIndex(
              (x) => x.F2BANO === newItem.F2BANO,
            );
            if (idx !== -1) {
              // Immutable replace (good for OnPush CD)
              this.items02 = [
                ...this.items02.slice(0, idx),
                { ...newItem },
                ...this.items02.slice(idx + 1),
              ];
            } else {
              this.items02 = [...this.items02, { ...newItem }];
            }
          }

          this.updateGridData();
          return;
        }

        // === Case B: finished orders exist
        // For each finished order (MTRIDN), we fetch EndProd to get size-lots,
        // then for each size-lot run Lst_GR_MITTRA (TTYP=11) to get the *real* MTRIDNs,
        // then for each of those run Lst_GR_MITTR2V2 to sum TTYP 10/12 into finreceipt.
        let remainingOrders = mtrIds.length;

        for (const orderId of mtrIds) {
          this.userService.getUserContext().subscribe(() => {
            // 1) EndProd -> size-lots + GOOD
            const epIn = new MIRecord();
            epIn.setString('F_MFHL', orderId);
            epIn.setString('T_MFHL', orderId);
            epIn.setString('F_BANO', '1');

            const epReq: IMIRequest = {
              program: 'CMS100MI',
              transaction: 'Lst_GR_EndProd',
              record: epIn,
              outputFields: ['VHFACI', 'VHBANO', 'VHPRNO', 'VHMFNO', 'VHRVQA'],
              maxReturnedRecords: 7000,
            };

            this.miService.execute(epReq).subscribe((epRes: IMIResponse) => {
              // Collect unique size-lots from EndProd and accumulate GOOD
              const sizeLots: string[] = [];
              if (!epRes.hasError()) {
                for (let j = 0; j < epRes.items.length; j++) {
                  const r = epRes.items[j];
                  good += Number(r.VHRVQA) || 0;
                  const lot = (r.VHBANO || '').trim();
                  if (lot) sizeLots.push(lot);
                }
              }

              // Unique size-lots
              const uniqLots = Array.from(new Set(sizeLots));

              // If no size-lots came back, just treat this order as done
              if (uniqLots.length === 0) {
                remainingOrders--;
                if (remainingOrders === 0) {
                  // all orders done -> push once

                  if (FGTP === '00') {
                    FGTP = '00- Not qualified for self billing';
                  }
                  if (FGTP === '10') {
                    FGTP = '10- Qualified, but with incorrect data';
                  }
                  if (FGTP === '15') {
                    FGTP = '15- Qualified, but required info missing';
                  }
                  if (FGTP === '20') {
                    FGTP = '20- Ready for transfer to APS450';
                  }
                  if (FGTP === '80') {
                    FGTP = '80- Transferred to APS450';
                  }
                  if (FGTP === '90') {
                    FGTP = '90- Invoice updated to Accounts Payable';
                  }
                  if (FGTP === '99') {
                    FGTP = '99- Reversed in PPS330';
                  }

                  if (pcdo === '0') {
                    pcdo = '0- No';
                  }
                  if (pcdo === '1') {
                    pcdo = '1- Yes, order costing';
                  }
                  if (pcdo === '2') {
                    pcdo = '2- Yes, production stats';
                  }
                  if (pcdo === '9') {
                    pcdo = '9- Yes, both been performed';
                  }

                  if (BLSB === '1') {
                    BLSB = 'YES';
                  } else {
                    BLSB = '';
                  }

                  this.items02y.push({
                    A2PVAR: PVAR,
                    GROWAR: GRWA,
                    VHPCDO: pcdo,
                    VHL01: this.ap01,
                    VHL02: this.ap02,
                    OBLINT: this.directx,
                    VHL03: this.ap03,
                    F2BLSB: BLSB,
                    VHL04: this.ap04,
                    VHREND: flag1,
                    MLSTQT: STQT,
                    SSTAT: FGTP,
                    VHP01: this.receiptitem01,
                    POexceed: this.exceed,
                    VHP02: this.receiptitem02,
                    VHP03: this.receiptitem03,
                    VHP04: this.receiptitem04,
                    SETQTY1: setqtyx,
                    DEDUV: deduv,
                    MOWaste1: mowastage_BS3,
                    ISSUEDBS2: issued1c,
                    DEDUP: deduct,
                    F2SUNO: SUNO,
                    GRVAL: GRVAL2,
                    PACKEDBS2: finreceipt,
                    VHR01: this.VHR01X,
                    VHR02: this.VHR02X,
                    VHR03: this.VHR03X,
                    VHR04: this.VHR04X,
                    F2PNLI: PNLI,
                    IBAGNB: AGNB,
                    GOOD: good,
                    WASTEBS3: this.wastex,
                    CPCT: CPCT,
                    CPRRF: CPRF,
                    SOLD: SOLD,
                    IBPUPR: UDN1,
                    CQTY: contractqty,
                    FPRRF: FPRF,
                    APRRF: APRF,
                    FQTY: freebuyqty,
                    MMITGR: ITGR,
                    ISSU: issued1a,
                    F2RPQA: RPQA,
                    FIN: total_issued,
                    GROWER: GRWR,
                    F2PUNO: PUNO,
                    LMATNR: ATNR,
                    AVAL: this.instock,
                    F2FACI: FACI,
                    GRVAR: GRVAR,
                    F2ITNO: ITNO,
                    MMITDS: ITDS,
                    MMCFI4: CFI4,
                    F2TRDT: TRDT,
                    F2BANO: BANO,
                    A1ATVA: ATV1,
                    A2ATVA: ATV2,
                    A3ATVA: ATV3,
                    A4ATVA: ATV4,
                    A5ATVA: ATV5,
                    VHORTY: TRTP,
                    MOWASTE: mowastage1,
                    A6ATVN: ATV6,
                    A7ATVN: ATV7,
                    SQTRQT: this.setqty1,
                    SETQTY2: SEQ2,
                    IBUDN1: UDN1,
                    IAORTY: ORTY,
                    F2SCOC: SCOC,
                  });
                  this.createe = true;

                  // 3) Safely replace or append items01y[0] into items01 by F2BANO
                  const newItem = this.items02y?.[0];
                  if (newItem && newItem.F2BANO) {
                    const idx = this.items02.findIndex(
                      (x) => x.F2BANO === newItem.F2BANO,
                    );
                    if (idx !== -1) {
                      // Immutable replace (good for OnPush CD)
                      this.items02 = [
                        ...this.items02.slice(0, idx),
                        { ...newItem },
                        ...this.items02.slice(idx + 1),
                      ];
                    } else {
                      this.items02 = [...this.items02, { ...newItem }];
                    }
                  }

                  this.updateGridData();
                }
                return;
              }

              // For this order, track completion across ALL size-lots and their MITTR2 chains
              let remainingLots = uniqLots.length;

              for (const lot of uniqLots) {
                this.userService.getUserContext().subscribe(() => {
                  // 2) For each size-lot -> Lst_GR_MITTRA (TTYP=11) to get MTRIDNs
                  const mittraIn = new MIRecord();
                  mittraIn.setString('F_BANO', lot);
                  mittraIn.setString('T_BANO', lot);
                  mittraIn.setString('F_TTYP', '11');
                  mittraIn.setString('T_TTYP', '11');

                  const mittraReq: IMIRequest = {
                    program: 'CMS100MI',
                    transaction: 'Lst_GR_MITTRA',
                    record: mittraIn,
                    outputFields: ['MTTRQT', 'VHREND', 'MTRIDN', 'MTTRTP'],
                    maxReturnedRecords: 7000,
                  };

                  this.miService
                    .execute(mittraReq)
                    .subscribe((mittraRes: IMIResponse) => {
                      const childMtrIds: string[] = [];
                      if (!mittraRes.hasError()) {
                        for (let a = 0; a < mittraRes.items.length; a++) {
                          const m = mittraRes.items[a];
                          issued1c -= Number(m.MTTRQT) || 0;
                          if (m.MTRIDN) childMtrIds.push(String(m.MTRIDN));
                        }
                      }

                      // If no child MTRIDs for this lot, the lot chain is done
                      if (childMtrIds.length === 0) {
                        remainingLots--;
                        if (remainingLots === 0) {
                          remainingOrders--;
                          if (remainingOrders === 0) {
                            // all chains done -> push once
                            if (FGTP === '00') {
                              FGTP = '00- Not qualified for self billing';
                            }
                            if (FGTP === '10') {
                              FGTP = '10- Qualified, but with incorrect data';
                            }
                            if (FGTP === '15') {
                              FGTP = '15- Qualified, but required info missing';
                            }
                            if (FGTP === '20') {
                              FGTP = '20- Ready for transfer to APS450';
                            }
                            if (FGTP === '80') {
                              FGTP = '80- Transferred to APS450';
                            }
                            if (FGTP === '90') {
                              FGTP = '90- Invoice updated to Accounts Payable';
                            }
                            if (FGTP === '99') {
                              FGTP = '99- Reversed in PPS330';
                            }

                            if (pcdo === '0') {
                              pcdo = '0- No';
                            }
                            if (pcdo === '1') {
                              pcdo = '1- Yes, order costing';
                            }
                            if (pcdo === '2') {
                              pcdo = '2- Yes, production stats';
                            }
                            if (pcdo === '9') {
                              pcdo = '9- Yes, both been performed';
                            }

                            if (BLSB === '1') {
                              BLSB = 'YES';
                            } else {
                              BLSB = '';
                            }

                            this.items02y.push({
                              A2PVAR: PVAR,
                              GROWAR: GRWA,
                              VHPCDO: pcdo,
                              VHL01: this.ap01,
                              VHL02: this.ap02,
                              OBLINT: this.directx,
                              VHL03: this.ap03,
                              F2BLSB: BLSB,
                              VHL04: this.ap04,
                              VHREND: flag1,
                              MLSTQT: STQT,
                              SSTAT: FGTP,
                              VHP01: this.receiptitem01,
                              POexceed: this.exceed,
                              VHP02: this.receiptitem02,
                              VHP03: this.receiptitem03,
                              VHP04: this.receiptitem04,
                              SETQTY1: setqtyx,
                              DEDUV: deduv,
                              MOWaste1: mowastage_BS3,
                              ISSUEDBS2: issued1c,
                              DEDUP: deduct,
                              F2SUNO: SUNO,
                              GRVAL: GRVAL2,
                              PACKEDBS2: finreceipt,
                              VHR01: this.VHR01X,
                              VHR02: this.VHR02X,
                              VHR03: this.VHR03X,
                              VHR04: this.VHR04X,
                              F2PNLI: PNLI,
                              IBAGNB: AGNB,
                              GOOD: good,
                              WASTEBS3: this.wastex,
                              CPCT: CPCT,
                              CPRRF: CPRF,
                              APRRF: APRF,
                              SOLD: SOLD,
                              IBPUPR: UDN1,
                              CQTY: contractqty,
                              FPRRF: FPRF,
                              FQTY: freebuyqty,
                              MMITGR: ITGR,
                              ISSU: issued1a,
                              F2RPQA: RPQA,
                              FIN: total_issued,
                              GROWER: GRWR,
                              F2PUNO: PUNO,
                              LMATNR: ATNR,
                              AVAL: this.instock,
                              F2FACI: FACI,
                              GRVAR: GRVAR,
                              F2ITNO: ITNO,
                              MMITDS: ITDS,
                              MMCFI4: CFI4,
                              F2TRDT: TRDT,
                              F2BANO: BANO,
                              A1ATVA: ATV1,
                              A2ATVA: ATV2,
                              A3ATVA: ATV3,
                              A4ATVA: ATV4,
                              A5ATVA: ATV5,
                              VHORTY: TRTP,
                              MOWASTE: this.mowastage1,
                              A6ATVN: ATV6,
                              A7ATVN: ATV7,
                              SQTRQT: this.setqty1,
                              SETQTY2: SEQ2,
                              IBUDN1: UDN1,
                              IAORTY: ORTY,
                              F2SCOC: SCOC,
                            });
                            this.createe = true;

                            // 3) Safely replace or append items01y[0] into items01 by F2BANO
                            const newItem = this.items02y?.[0];
                            if (newItem && newItem.F2BANO) {
                              const idx = this.items02.findIndex(
                                (x) => x.F2BANO === newItem.F2BANO,
                              );
                              if (idx !== -1) {
                                // Immutable replace (good for OnPush CD)
                                this.items02 = [
                                  ...this.items02.slice(0, idx),
                                  { ...newItem },
                                  ...this.items02.slice(idx + 1),
                                ];
                              } else {
                                this.items02 = [
                                  ...this.items02,
                                  { ...newItem },
                                ];
                              }
                            }

                            this.updateGridData();
                          }
                        }
                        return;
                      }

                      // 3) For each child MTRID -> Lst_GR_MITTR2V2 to sum TTYP 10/12 into finreceipt
                      let remainingChild = childMtrIds.length;

                      for (const childId of childMtrIds) {
                        this.userService.getUserContext().subscribe(() => {
                          const tr2In = new MIRecord();
                          tr2In.setString('MTRIDN', childId);
                          const tr2Req: IMIRequest = {
                            program: 'CMS100MI',
                            transaction: 'Lst_GR_MITTR2V2',
                            record: tr2In,
                            outputFields: [
                              'MTTRQT',
                              'VHREND',
                              'MTRIDN',
                              'MTTTYP',
                              'MTITNO',
                            ],
                            maxReturnedRecords: 7000,
                          };

                          this.miService
                            .execute(tr2Req)
                            .subscribe((tr2Res: IMIResponse) => {
                              if (!tr2Res.hasError()) {
                                for (let k = 0; k < tr2Res.items.length; k++) {
                                  const y = tr2Res.items[k];
                                  if (y.MTTTYP === '10' || y.MTTTYP === '12') {
                                    finreceipt += Number(y.MTTRQT) || 0;
                                  }
                                }
                              }

                              // child finished
                              remainingChild--;
                              if (remainingChild === 0) {
                                // all children for this lot finished
                                remainingLots--;
                                if (remainingLots === 0) {
                                  // all lots for this order finished
                                  remainingOrders--;
                                  if (remainingOrders === 0) {
                                    if (issued1c !== 0) {
                                      mowastage_BS3 = (
                                        (1 - finreceipt / issued1c) *
                                        100
                                      ).toFixed(2);
                                    }

                                    if (mowastage_BS3 > parseFloat(ATV7)) {
                                      deduct = Number(
                                        (mowastage_BS3 - ATV7).toFixed(3),
                                      );
                                    } else {
                                      deduct = 0;
                                    }
                                    wastex = issued1a - good;

                                    //deduction in kilos
                                    deduv = Math.round(
                                      (deduct / 100) * issued1c,
                                    );
                                    setqtyx = Math.round(
                                      Number(good) - Number(deduv),
                                    );

                                    if (parseFloat(RPQA) > this.setqtyx) {
                                      this.exceed = true;
                                    } else {
                                      this.exceed = false;
                                    }

                                    if (setqtyx) {
                                      contractqty = (
                                        (setqtyx * CPCT) /
                                        100
                                      ).toFixed(0);
                                    }
                                    if (setqtyx) {
                                      freebuyqty = (
                                        setqtyx *
                                        ((100 - CPCT) / 100)
                                      ).toFixed(0);
                                    }

                                    GRVAL2 = (
                                      parseFloat(APRF) * parseFloat(setqtyx)
                                    ).toFixed(2);

                                    //    if (
                                    //      potype == 'SPT' &&
                                    //      spotprice > 0
                                    //    ) {
                                    //      this.GRVAL2 = (
                                    //        parseFloat(this.spotprice) *
                                    //        this.setqtyx
                                    //      ).toFixed(2);
                                    //    }

                                    if (ORTY == 'SPT' && parseFloat(UDN1) > 0) {
                                      GRVAL2 = (
                                        parseFloat(UDN1) * parseFloat(RPQA)
                                      ).toFixed(2);
                                    }

                                    if (
                                      ORTY == 'SPT' &&
                                      parseFloat(UDN1) > 0 &&
                                      parseFloat(SEQ2) !== 0
                                    ) {
                                      GRVAL2 = (
                                        parseFloat(UDN1) * parseFloat(SEQ2)
                                      ).toFixed(2);
                                    }

                                    if (parseFloat(SEQ2) !== 0) {
                                      GRVAL2 = (
                                        parseFloat(APRF) * parseFloat(SEQ2)
                                      ).toFixed(2);
                                    }

                                    GRVAR = (
                                      parseFloat(GRVAL2) -
                                      parseFloat(SCOC) * parseFloat(RPQA)
                                    ).toFixed(2);

                                    // everything done -> push once
                                    if (FGTP === '00') {
                                      FGTP =
                                        '00- Not qualified for self billing';
                                    }
                                    if (FGTP === '10') {
                                      FGTP =
                                        '10- Qualified, but with incorrect data';
                                    }
                                    if (FGTP === '15') {
                                      FGTP =
                                        '15- Qualified, but required info missing';
                                    }
                                    if (FGTP === '20') {
                                      FGTP = '20- Ready for transfer to APS450';
                                    }
                                    if (FGTP === '80') {
                                      FGTP = '80- Transferred to APS450';
                                    }
                                    if (FGTP === '90') {
                                      FGTP =
                                        '90- Invoice updated to Accounts Payable';
                                    }
                                    if (FGTP === '99') {
                                      FGTP = '99- Reversed in PPS330';
                                    }

                                    if (pcdo === '0') {
                                      pcdo = '0- No';
                                    }
                                    if (pcdo === '1') {
                                      pcdo = '1- Yes, order costing';
                                    }
                                    if (pcdo === '2') {
                                      pcdo = '2- Yes, production stats';
                                    }
                                    if (pcdo === '9') {
                                      pcdo = '9- Yes, both been performed';
                                    }

                                    if (BLSB === '1') {
                                      BLSB = 'YES';
                                    } else {
                                      BLSB = '';
                                    }

                                    this.items02y.push({
                                      A2PVAR: PVAR,
                                      GROWAR: GRWA,
                                      VHPCDO: pcdo,
                                      VHL01: this.ap01,
                                      VHL02: this.ap02,
                                      OBLINT: this.directx,
                                      VHL03: this.ap03,
                                      F2BLSB: BLSB,
                                      VHL04: this.ap04,
                                      VHREND: flag1,
                                      MLSTQT: STQT,
                                      SSTAT: FGTP,
                                      VHP01: this.receiptitem01,
                                      POexceed: this.exceed,
                                      VHP02: this.receiptitem02,
                                      VHP03: this.receiptitem03,
                                      VHP04: this.receiptitem04,
                                      SETQTY1: setqtyx,
                                      DEDUV: deduv,
                                      MOWaste1: mowastage_BS3,
                                      ISSUEDBS2: issued1c,
                                      DEDUP: deduct,
                                      F2SUNO: SUNO,
                                      GRVAL: GRVAL2,
                                      PACKEDBS2: finreceipt,
                                      VHR01: this.VHR01X,
                                      VHR02: this.VHR02X,
                                      VHR03: this.VHR03X,
                                      VHR04: this.VHR04X,
                                      F2PNLI: PNLI,
                                      IBAGNB: AGNB,
                                      GOOD: good,
                                      WASTEBS3: wastex,
                                      CPCT: CPCT,
                                      CPRRF: CPRF,
                                      SOLD: SOLD,
                                      IBPUPR: UDN1,
                                      CQTY: contractqty,
                                      FPRRF: FPRF,
                                      APRRF: APRF,
                                      FQTY: freebuyqty,
                                      MMITGR: ITGR,
                                      ISSU: issued1a,
                                      F2RPQA: RPQA,
                                      FIN: total_issued,
                                      GROWER: GRWR,
                                      F2PUNO: PUNO,
                                      LMATNR: ATNR,
                                      AVAL: this.instock,
                                      F2FACI: FACI,
                                      GRVAR: GRVAR,
                                      F2ITNO: ITNO,
                                      MMITDS: ITDS,
                                      MMCFI4: CFI4,
                                      F2TRDT: TRDT,
                                      F2BANO: BANO,
                                      A1ATVA: ATV1,
                                      A2ATVA: ATV2,
                                      A3ATVA: ATV3,
                                      A4ATVA: ATV4,
                                      A5ATVA: ATV5,
                                      VHORTY: TRTP,
                                      MOWASTE: mowastage1,
                                      A6ATVN: ATV6,
                                      A7ATVN: ATV7,
                                      SQTRQT: this.setqty1,
                                      SETQTY2: SEQ2,
                                      IBUDN1: UDN1,
                                      IAORTY: ORTY,
                                      F2SCOC: SCOC,
                                    });
                                    this.createe = true;

                                    // 3) Safely replace or append items01y[0] into items01 by F2BANO
                                    const newItem = this.items02y?.[0];
                                    if (newItem && newItem.F2BANO) {
                                      const idx = this.items02.findIndex(
                                        (x) => x.F2BANO === newItem.F2BANO,
                                      );
                                      if (idx !== -1) {
                                        // Immutable replace (good for OnPush CD)
                                        this.items02 = [
                                          ...this.items02.slice(0, idx),
                                          { ...newItem },
                                          ...this.items02.slice(idx + 1),
                                        ];
                                      } else {
                                        this.items02 = [
                                          ...this.items02,
                                          { ...newItem },
                                        ];
                                      }
                                    }

                                    this.updateGridData();
                                  }
                                }
                              }
                            });
                        });
                      } // end for each childId
                    });
                });
              } // end for each lot
            });
          });
        } // end for each orderId
      });
    });
  }

  checkMO11nonBS3x(
    PVAR: any,
    GRWA: any,
    GRWR: any,
    ATNR: any,
    ITNO: any,
    ITDS: any,
    CFI4: any,
    TRDT: any,
    ATV1: any,
    ATV2: any,
    ATV3: any,
    ATV4: any,
    ATV5: any,
    ATV6: any,
    ATV7: any,
    SEQ2: any,
    UDN1: any,
    ORTY: any,
    SCOC: any,
    BLSB: any,
    STQT: any,
    AGNB: any,
    CPCT: any,
    SOLD: any,
    BANO: any,
    RPQA: any,
    ITGR: any,
    PUNO: any,
    PNLI: any,
    SUNO: any,
    FACI: any,
    TRTP: any,
    CFI3: any,
    FGTP: any,
    CPRF: any,
    FPRF: any,
    APRF: any,
  ) {
    let issued1a = 0;
    let total_issued = 0;
    let finreceipt = 0;

    // locals to avoid relying on unset this.*
    let pcdo = '0';
    let flag1 = 'not started';

    let mowastage = 0;
    let mowastage1 = '';
    let mowastage_BS3 = null;
    let mowastage_BS4 = null;
    let deduct = 0;
    let setqtyx1 = 0;
    let setqty1;
    let deduv;
    let po1;

    let setqtyx;
    let contractqty;
    let freebuyqty;

    let GRVAL2;
    let GRVAR;

    // collect finished orders (MTRIDN) for MITTRA2
    const mtrIds: string[] = [];

    this.userService.getUserContext().subscribe(() => {
      const input = new MIRecord();
      input.setString('F_BANO', BANO);
      input.setString('T_BANO', BANO);
      input.setString('F_TTYP', '11');
      input.setString('T_TTYP', '11');

      const request: IMIRequest = {
        program: 'CMS100MI',
        transaction: 'Lst_GR_MITTRA',
        record: input,
        outputFields: [
          'MTTRQT',
          'VHREND',
          'MTRIDN',
          'VHMFNO',
          'VHORTY',
          'MTTRTP',
          'VHPCDO',
        ],
        maxReturnedRecords: 7000,
      };

      this.miService.execute(request).subscribe((response: IMIResponse) => {
        if (response.hasError()) return;

        // pass 1: summarise TTYP 11 + collect order ids
        for (let i = 0; i < response.items.length; i++) {
          const itemx = response.items[i];

          flag1 = itemx.VHREND ?? flag1;
          pcdo = itemx.VHPCDO ?? pcdo;

          if (flag1 === '1') {
            flag1 = 'Finish marked';
          } else {
            flag1 = 'In progress';
          }

          if (itemx.VHREND === '1') {
            const q = Number(itemx.MTTRQT) || 0;
            total_issued += q;
            issued1a -= q;

            if (itemx.MTRIDN) {
              mtrIds.push(String(itemx.MTRIDN));
            }
          }
        }

        if (FGTP === '00') {
          FGTP = '00- Not qualified for self billing';
        }
        if (FGTP === '10') {
          FGTP = '10- Qualified, but with incorrect data';
        }
        if (FGTP === '15') {
          FGTP = '15- Qualified, but required info missing';
        }
        if (FGTP === '20') {
          FGTP = '20- Ready for transfer to APS450';
        }
        if (FGTP === '80') {
          FGTP = '80- Transferred to APS450';
        }
        if (FGTP === '90') {
          FGTP = '90- Invoice updated to Accounts Payable';
        }
        if (FGTP === '99') {
          FGTP = '99- Reversed in PPS330';
        }

        if (pcdo === '0') {
          pcdo = '0- No';
        }
        if (pcdo === '1') {
          pcdo = '1- Yes, order costing';
        }
        if (pcdo === '2') {
          pcdo = '2- Yes, production stats';
        }
        if (pcdo === '9') {
          pcdo = '9- Yes, both been performed';
        }

        console.log('vre ' + BANO + ' ' + BLSB);

        if (BLSB === '0') {
          BLSB = true;
        } else {
          BLSB = false;
        }

        console.log('vre ' + BANO + ' ' + BLSB);

        if (RPQA) {
          contractqty = ((RPQA * CPCT) / 100).toFixed(0);
        }
        if (RPQA) {
          freebuyqty = (RPQA * ((100 - CPCT) / 100)).toFixed(0);
        }

        GRVAL2 = (parseFloat(APRF) * parseFloat(RPQA)).toFixed(2);

        if (parseFloat(SEQ2) !== 0) {
          GRVAL2 = (parseFloat(APRF) * parseFloat(SEQ2)).toFixed(2);
        }

        if (ORTY == 'SPT' && parseFloat(UDN1) > 0) {
          GRVAL2 = (parseFloat(UDN1) * parseFloat(RPQA)).toFixed(2);
        }

        if (ORTY == 'SPT' && parseFloat(UDN1) > 0 && parseFloat(SEQ2) !== 0) {
          GRVAL2 = (parseFloat(UDN1) * parseFloat(SEQ2)).toFixed(2);
        }

        GRVAR = (
          parseFloat(GRVAL2) -
          parseFloat(SCOC) * parseFloat(RPQA)
        ).toFixed(2);

        // case A: no finished orders -> push once immediately (no receipts)
        if (mtrIds.length === 0) {
          this.items02y.push({
            A2PVAR: PVAR,
            GROWAR: GRWA,
            VHPCDO: pcdo,
            VHL01: this.ap01,
            VHL02: this.ap02,
            OBLINT: this.directx,
            VHL03: this.ap03,
            F2BLSB: BLSB,
            VHL04: this.ap04,
            VHREND: flag1,
            MLSTQT: STQT,
            SSTAT: FGTP,
            VHP01: this.receiptitem01,
            POexceed: this.exceed,
            VHP02: this.receiptitem02,
            VHP03: this.receiptitem03,
            VHP04: this.receiptitem04,
            SETQTY1: RPQA,
            DEDUV: deduv,
            MOWaste1: mowastage_BS3,
            ISSUEDBS2: this.issued1c,
            DEDUP: deduct,
            F2SUNO: SUNO,
            GRVAL: GRVAL2,
            PACKEDBS2: 0, // no MITTRA2 receipts
            VHR01: this.VHR01X,
            VHR02: this.VHR02X,
            VHR03: this.VHR03X,
            VHR04: this.VHR04X,
            F2PNLI: PNLI,
            IBAGNB: AGNB,
            GOOD: this.good,
            WASTEBS3: this.wastex,
            CPCT: CPCT,
            CPRRF: CPRF, // fixed key (no CPRRF)
            SOLD: SOLD,
            IBPUPR: UDN1,
            CQTY: contractqty,
            FPRRF: FPRF, // fixed key (no FPRRF)
            FQTY: freebuyqty,
            APRRF: APRF,
            MMITGR: ITGR,
            ISSU: issued1a,
            F2RPQA: RPQA,
            FIN: total_issued, // total issued from TTYP 11
            GROWER: GRWR,
            F2PUNO: PUNO,
            LMATNR: ATNR,
            AVAL: this.instock,
            F2FACI: FACI,
            GRVAR: GRVAR,
            F2ITNO: ITNO,
            MMITDS: ITDS,
            MMCFI4: CFI4,
            F2TRDT: TRDT,
            F2BANO: BANO,
            A1ATVA: ATV1,
            A2ATVA: ATV2,
            A3ATVA: ATV3,
            A4ATVA: ATV4,
            A5ATVA: ATV5,
            VHORTY: TRTP,
            MOWASTE: this.mowastage1,
            A6ATVN: ATV6,
            A7ATVN: ATV7,
            SQTRQT: this.setqty1,
            SETQTY2: SEQ2,
            IBUDN1: UDN1,
            IAORTY: ORTY,
            F2SCOC: SCOC,
          });

          // write to grid for this lot
          this.createe = true;

          // 3) Safely replace or append items01y[0] into items01 by F2BANO
          const newItem = this.items02y?.[0];
          if (newItem && newItem.F2BANO) {
            const idx = this.items02.findIndex(
              (x) => x.F2BANO === newItem.F2BANO,
            );
            if (idx !== -1) {
              // Immutable replace (good for OnPush CD)
              this.items02 = [
                ...this.items02.slice(0, idx),
                { ...newItem },
                ...this.items02.slice(idx + 1),
              ];
            } else {
              this.items02 = [...this.items02, { ...newItem }];
            }
          }

          this.updateGridData();
          return;
        }

        // case B: finished orders exist -> run MITTRA2 for each, wait for all, then push once
        let remaining = mtrIds.length;

        for (const orderId of mtrIds) {
          this.userService.getUserContext().subscribe(() => {
            const input2 = new MIRecord();
            input2.setString('MTRIDN', orderId);
            const req2: IMIRequest = {
              program: 'CMS100MI',
              transaction: 'Lst_GR_MITTR2V2',
              record: input2,
              outputFields: ['MTTRQT', 'VHREND', 'MTRIDN', 'MTTTYP', 'MTITNO'],
              maxReturnedRecords: 7000,
            };

            this.miService.execute(req2).subscribe((res2: IMIResponse) => {
              if (!res2.hasError()) {
                for (let j = 0; j < res2.items.length; j++) {
                  const itemy = res2.items[j];
                  if (itemy.MTTTYP === '10' || itemy.MTTTYP === '12') {
                    finreceipt += Number(itemy.MTTRQT) || 0;
                  }
                }

                mowastage = 0;
                mowastage1 = '';
                mowastage_BS3 = null;
                mowastage_BS4 = null;
                deduct = 0;
                setqtyx1 = 0;
                setqty1;
                deduv;
                po1;
                setqtyx;

                console.log('bano ' + BANO);

                if (issued1a > 0) {
                  if (parseFloat(RPQA) > 0) {
                    mowastage_BS4 = (
                      100 -
                      (finreceipt / parseFloat(RPQA)) * 100
                    ).toFixed(2);
                  } else {
                    mowastage_BS4 = null;
                  }
                  mowastage_BS3 = parseFloat(mowastage_BS4);
                }

                if (mowastage_BS3 > parseFloat(ATV7)) {
                  deduct = Number((mowastage_BS3 - ATV7).toFixed(3));
                } else {
                  deduct = 0;
                }
                if (mowastage_BS3 > parseFloat(ATV7)) {
                  setqtyx1 =
                    parseFloat(RPQA) *
                    (1 - (mowastage_BS3 - parseFloat(ATV7)) / 100);
                  setqty1 = setqtyx1.toFixed(0);
                }
                if (mowastage_BS3 < parseFloat(ATV7)) {
                  setqtyx1 = parseFloat(RPQA);
                }

                po1 = isNaN(issued1a);
                if (po1 === true) {
                  setqty1 = RPQA;
                }
                setqtyx = parseFloat(setqty1).toFixed(0);

                //deduction in kilos
                deduv = ((deduct / 100) * issued1a).toFixed(0);
                setqtyx = (parseFloat(RPQA) - deduv).toFixed(0);

                console.log('ssw ' + RPQA + ' ' + deduv + ' ' + BANO);

                //Settled Qty can never be higher than the PO Receipt quantity for every lot number
                if (finreceipt > parseFloat(RPQA)) {
                  setqtyx = RPQA;
                }

                if (RPQA > this.setqtyx) {
                  this.exceed = true;
                } else {
                  this.exceed = false;
                }
              }

              if (setqtyx) {
                contractqty = ((setqtyx * CPCT) / 100).toFixed(0);
              }
              if (setqtyx) {
                freebuyqty = (setqtyx * ((100 - CPCT) / 100)).toFixed(0);
              }

              GRVAL2 = (parseFloat(APRF) * parseFloat(setqtyx)).toFixed(2);

              if (parseFloat(SEQ2) !== 0) {
                GRVAL2 = (parseFloat(APRF) * parseFloat(SEQ2)).toFixed(2);
              }

              if (ORTY == 'SPT' && parseFloat(UDN1) > 0) {
                GRVAL2 = (parseFloat(UDN1) * parseFloat(RPQA)).toFixed(2);
              }

              if (
                ORTY == 'SPT' &&
                parseFloat(UDN1) > 0 &&
                parseFloat(SEQ2) !== 0
              ) {
                GRVAL2 = (parseFloat(UDN1) * parseFloat(SEQ2)).toFixed(2);
              }

              GRVAR = (
                parseFloat(GRVAL2) -
                parseFloat(SCOC) * parseFloat(RPQA)
              ).toFixed(2);

              if (FGTP === '00') {
                FGTP = '00- Not qualified for self billing';
              }
              if (FGTP === '10') {
                FGTP = '10- Qualified, but with incorrect data';
              }
              if (FGTP === '15') {
                FGTP = '15- Qualified, but required info missing';
              }
              if (FGTP === '20') {
                FGTP = '20- Ready for transfer to APS450';
              }
              if (FGTP === '80') {
                FGTP = '80- Transferred to APS450';
              }
              if (FGTP === '90') {
                FGTP = '90- Invoice updated to Accounts Payable';
              }
              if (FGTP === '99') {
                FGTP = '99- Reversed in PPS330';
              }

              if (pcdo === '0') {
                pcdo = '0- No';
              }
              if (pcdo === '1') {
                pcdo = '1- Yes, order costing';
              }
              if (pcdo === '2') {
                pcdo = '2- Yes, production stats';
              }
              if (pcdo === '9') {
                pcdo = '9- Yes, both been performed';
              }

              console.log('vre ' + BANO + ' ' + BLSB);

              if (BLSB === '0') {
                BLSB = true;
              } else {
                BLSB = false;
              }

              console.log('vre ' + BANO + ' ' + BLSB);

              remaining--;
              if (remaining === 0) {
                // all MITTRA2 calls done -> push once with final finreceipt
                this.items02y.push({
                  A2PVAR: PVAR,
                  GROWAR: GRWA,
                  VHPCDO: pcdo,
                  VHL01: this.ap01,
                  VHL02: this.ap02,
                  OBLINT: this.directx,
                  VHL03: this.ap03,
                  F2BLSB: BLSB,
                  VHL04: this.ap04,
                  VHREND: flag1,
                  MLSTQT: STQT,
                  SSTAT: FGTP,
                  VHP01: this.receiptitem01,
                  POexceed: this.exceed,
                  VHP02: this.receiptitem02,
                  VHP03: this.receiptitem03,
                  VHP04: this.receiptitem04,
                  SETQTY1: setqtyx,
                  DEDUV: deduv,
                  MOWaste1: mowastage_BS3,
                  ISSUEDBS2: this.issued1c,
                  DEDUP: deduct,
                  F2SUNO: SUNO,
                  GRVAL: GRVAL2,
                  PACKEDBS2: finreceipt, // summed receipts (TTYP 10/12)
                  VHR01: this.VHR01X,
                  VHR02: this.VHR02X,
                  VHR03: this.VHR03X,
                  VHR04: this.VHR04X,
                  F2PNLI: PNLI,
                  IBAGNB: AGNB,
                  GOOD: this.good,
                  WASTEBS3: this.wastex,
                  CPCT: CPCT,
                  CPRRF: CPRF,
                  SOLD: SOLD,
                  IBPUPR: UDN1,
                  CQTY: contractqty,
                  FPRRF: FPRF,
                  APRRF: APRF,
                  FQTY: freebuyqty,
                  MMITGR: ITGR,
                  ISSU: issued1a,
                  F2RPQA: RPQA,
                  FIN: total_issued, // total issued from TTYP 11
                  GROWER: GRWR,
                  F2PUNO: PUNO,
                  LMATNR: ATNR,
                  AVAL: this.instock,
                  F2FACI: FACI,
                  GRVAR: GRVAR,
                  F2ITNO: ITNO,
                  MMITDS: ITDS,
                  MMCFI4: CFI4,
                  F2TRDT: TRDT,
                  F2BANO: BANO,
                  A1ATVA: ATV1,
                  A2ATVA: ATV2,
                  A3ATVA: ATV3,
                  A4ATVA: ATV4,
                  A5ATVA: ATV5,
                  VHORTY: TRTP,
                  MOWASTE: mowastage1,
                  A6ATVN: ATV6,
                  A7ATVN: ATV7,
                  SQTRQT: this.setqty1,
                  SETQTY2: SEQ2,
                  IBUDN1: UDN1,
                  IAORTY: ORTY,
                  F2SCOC: SCOC,
                });

                // write to grid for this lot
                this.createe = true;

                // 3) Safely replace or append items01y[0] into items01 by F2BANO
                const newItem = this.items02y?.[0];
                if (newItem && newItem.F2BANO) {
                  const idx = this.items02.findIndex(
                    (x) => x.F2BANO === newItem.F2BANO,
                  );
                  if (idx !== -1) {
                    // Immutable replace (good for OnPush CD)
                    this.items02 = [
                      ...this.items02.slice(0, idx),
                      { ...newItem },
                      ...this.items02.slice(idx + 1),
                    ];
                  } else {
                    this.items02 = [...this.items02, { ...newItem }];
                  }
                }

                this.updateGridData();
              }
            });
          });
        }
      });
    });
  }

  //run outer loop for summarized FGRECL PPS118 records lower than status 80, AND lotqty = 0 AND completion flag is set to 1

  //calculate contract percentage (ansyncronously)
  getcontractPercentage(suno: any, obv1: string, obv2: any) {
    this.contract_percentage = 0;
    this.userService.getUserContext().subscribe(
      (context) => {
        const input = new MIRecord();
        input.setString('AJSUNO', suno);
        input.setString('AJGRPI', '30');
        input.setString('F_OBV1', obv1);
        input.setString('T_OBV1', obv1);
        input.setString('F_OBV2', obv2);
        input.setString('T_OBV2', obv2);

        const request: IMIRequest = {
          program: 'CMS100MI',
          transaction: 'Lst_GRAgreement',
          record: input,
          outputFields: [
            'AJAGNB',
            'AJSUNO',
            'AJOBJ1',
            'AJOBV2',
            'AJFVDT',
            'AJPUPR',
            'AIUVDT',
          ],
          maxReturnedRecords: 7000,
        };

        this.miService.execute(request).subscribe(
          async (response: IMIResponse) => {
            if (!response.hasError()) {
              for (let i = 0; i < response.items.length; i++) {
                const item = response.items[i];
                if (item.AIUVDT === '') {
                  item.AIUVDT = '99999999';
                }
                if (
                  this.curdateYYYMMDD >= item.AJFVDT &&
                  this.curdateYYYMMDD < item.AIUVDT
                )
                  this.contract_percentage = parseFloat(item.AJPUPR);
              }
            } else {
            }
          },
          (error) => {
            //  this.isBusy = false;
          },
        );
      },
      (error) => {
        // this.isBusy = false;
      },
    );
  }

  //get contract pricing from PPS100
  getcontractPricing(suno: any, obv1: string, obv2: any) {
    this.contract_price = 0;
    this.userService.getUserContext().subscribe(
      (context) => {
        const input = new MIRecord();
        input.setString('AJSUNO', suno);
        input.setString('AJGRPI', '30');
        input.setString('F_OBV1', obv1);
        input.setString('T_OBV1', obv1);
        input.setString('F_OBV2', obv2);
        input.setString('T_OBV2', obv2);

        const request: IMIRequest = {
          program: 'CMS100MI',
          transaction: 'Lst_GRAgreement',
          record: input,
          outputFields: [
            'AJAGNB',
            'AJSUNO',
            'AJOBJ1',
            'AJOBV2',
            'AJFVDT',
            'AJPUPR',
            'AIUVDT',
          ],
          maxReturnedRecords: 7000,
        };

        this.miService.execute(request).subscribe(
          async (response: IMIResponse) => {
            if (!response.hasError()) {
              for (let i = 0; i < response.items.length; i++) {
                const item = response.items[i];
                if (item.AIUVDT === '') {
                  item.AIUVDT = '99999999';
                }
                if (
                  this.curdateYYYMMDD >= item.AJFVDT &&
                  this.curdateYYYMMDD < item.AIUVDT
                ) {
                  this.contract_price = parseFloat(item.AJPUPR).toFixed(2);
                }
              }
            } else {
            }
          },
          (error) => {
            //  this.isBusy = false;
          },
        );
      },
      (error) => {
        // this.isBusy = false;
      },
    );
  }

  //get freebuy pricing from PPS100
  getFreebuyPricing(suno, obv1) {
    this.freebuy_price = 0;
    suno = 'FREEBUY' + this.region;

    this.userService.getUserContext().subscribe(
      (context) => {
        const input = new MIRecord();
        input.setString('AJSUNO', suno);
        input.setString('AJGRPI', '30');
        input.setString('F_OBV1', obv1);
        input.setString('T_OBV1', obv1);

        const request: IMIRequest = {
          program: 'CMS100MI',
          transaction: 'Lst_GRAgreement',
          record: input,
          outputFields: [
            'AJAGNB',
            'AJSUNO',
            'AJOBJ1',
            'AJOBV2',
            'AJFVDT',
            'AJPUPR',
            'AIUVDT',
          ],
          maxReturnedRecords: 7000,
        };

        this.miService.execute(request).subscribe(
          async (response: IMIResponse) => {
            if (!response.hasError()) {
              for (let i = 0; i < response.items.length; i++) {
                const item = response.items[i];
                if (item.AIUVDT === '') {
                  item.AIUVDT = '99999999';
                }
                if (
                  this.curdateYYYMMDD >= item.AJFVDT &&
                  this.curdateYYYMMDD < item.AIUVDT
                ) {
                  this.freebuy_price = parseFloat(item.AJPUPR).toFixed(2);
                }
              }
            } else {
            }
          },
          (error) => {
            //  this.isBusy = false;
          },
        );
      },
      (error) => {
        // this.isBusy = false;
      },
    );
  }

  async getPOLineInfo(puno: string, pnli: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.userService.getUserContext().subscribe(
        (context) => {
          const input = new MIRecord();
          input.setString('IBPUNO', puno);
          input.setString('IBPNLI', pnli);

          const request: IMIRequest = {
            program: 'CMS100MI',
            transaction: 'Lst_GR_MPLINE',
            record: input,
            outputFields: [
              'IBPUPR',
              'IBAGNB',
              'IBOURR',
              'IDCFI3',
              'IBUDN1',
              'IAORTY',
              'E5SINO',
              'IAUCA7',
            ],
            maxReturnedRecords: 7000,
          };

          this.miService.execute(request).subscribe(
            (response: IMIResponse) => {
              if (!response.hasError()) {
                for (let i = 0; i < response.items.length; i++) {
                  const item = response.items[i];
                  this.purchase_price = item.IBPUPR;
                  this.agreement = item.IBOURR;
                  this.potype = item.IAORTY;
                  this.spotprice = item.IBPUPR;
                  this.price_variety = item.IAUCA7;
                  this.suppinvoice = item.E5SINO;

                  if (this.potype !== 'SPT') {
                    this.spotprice = '';
                  }
                }
                resolve(); // ✅ Resolve when done
              } else {
                reject('MI Error'); // ❌ Optional error handling
              }
            },
            (error) => {
              reject(error); // ❌ On miService error
            },
          );
        },
        (error) => {
          reject(error); // ❌ On userContext error
        },
      );
    });
  }

  //sales lot number
  addSales(bano) {
    this.sold = 0;
    this.direct = '';
    this.userService.getUserContext().subscribe(
      (context) => {
        const input = new MIRecord();
        input.setString('F_BANO', bano);
        input.setString('T_BANO', bano);
        input.setString('F_TTYP', '31');
        input.setString('T_TTYP', '31');

        const request: IMIRequest = {
          program: 'CMS100MI',
          transaction: 'Lst_GR_MITTRA',
          record: input,
          outputFields: [
            'MTTRQT',
            'VHREND',
            'MTRIDN',
            'VHMFNO',
            'VHORTY',
            'OAORTP',
            'UBDLQA',
            'UBIVQA',
          ],
          maxReturnedRecords: 7000,
        };
        this.miService.execute(request).subscribe(
          async (response: IMIResponse) => {
            if (!response.hasError()) {
              for (let i = 0; i < response.items.length; i++) {
                const item = response.items[i];
                this.sold += -parseFloat(item.MTTRQT);
                this.direct = item.OAORTP;

                this.PodDLIX = item.UBDLQA;
                this.PodIVQA = item.UBIVQA;

                console.log('reds ' + this.sold);
                console.log('reds ' + item.OAORTP);

                if (item.OAORTP === 'DIR' && parseFloat(item.UBDLQA) !== 0) {
                  this.sold = parseFloat(item.UBDLQA);
                }
              }
            } else {
            }
          },
          (error) => {
            //  this.isBusy = false;
          },
        );
      },
      (error) => {
        // this.isBusy = false;
      },
    );
  }

  addSettledQty(itno, bano) {
    this.userService.getUserContext().subscribe(
      (context) => {
        const input = new MIRecord();
        input.setString('AGITNO', itno);
        input.setString('AGBANO', bano);

        const request: IMIRequest = {
          program: 'CMS100MI',
          transaction: 'Lst_GR_ATIDX',
          record: input,
          outputFields: ['AGITNO', 'AGBANO', 'AGATVA', 'AGATVN', 'AGATID'],
          maxReturnedRecords: 7000,
        };

        this.miService.execute(request).subscribe(
          async (response: IMIResponse) => {
            if (!response.hasError()) {
              for (let i = 0; i < response.items.length; i++) {
                const item = response.items[i];
                if (item.AGATID === 'OVERWRITESETQTY') {
                  this.overwrite_setqty = item.AGATVN;
                }
              }
            } else {
            }
          },
          (error) => {
            //  this.isBusy = false;
          },
        );
      },
      (error) => {
        // this.isBusy = false;
      },
    );
  }

  //add grower name
  addGrowerName(itno, bano) {
    this.userService.getUserContext().subscribe(
      (context) => {
        const input = new MIRecord();
        input.setString('AGITNO', itno);
        input.setString('AGBANO', bano);

        const request: IMIRequest = {
          program: 'CMS100MI',
          transaction: 'Lst_GR_ATID',
          record: input,
          outputFields: ['AGITNO', 'AGBANO', 'AGATVA', 'AGATVN', 'AGATID'],
          maxReturnedRecords: 7000,
        };

        this.miService.execute(request).subscribe(
          async (response: IMIResponse) => {
            if (!response.hasError()) {
              for (let i = 0; i < response.items.length; i++) {
                const item = response.items[i];
                if (item.AGATID === 'GNAME') {
                  this.grower = item.AGATVA;
                }
              }
            } else {
            }
          },
          (error) => {
            //  this.isBusy = false;
          },
        );
      },
      (error) => {
        // this.isBusy = false;
      },
    );
  }

  //add grower area
  addGrowerArea(itno, bano) {
    this.growerarea = '';
    this.userService.getUserContext().subscribe(
      (context) => {
        const input = new MIRecord();
        input.setString('AGITNO', itno);
        input.setString('AGBANO', bano);

        const request: IMIRequest = {
          program: 'CMS100MI',
          transaction: 'Lst_GR_ATID',
          record: input,
          outputFields: ['AGITNO', 'AGBANO', 'AGATVA', 'AGATVN', 'AGATID'],
          maxReturnedRecords: 7000,
        };

        this.miService.execute(request).subscribe(
          async (response: IMIResponse) => {
            if (!response.hasError()) {
              for (let i = 0; i < response.items.length; i++) {
                const item = response.items[i];
                if (item.AGATID === 'GAREA') {
                  this.growerarea = item.AGATVA;
                }
              }
            } else {
            }
          },
          (error) => {
            //  this.isBusy = false;
          },
        );
      },
      (error) => {
        // this.isBusy = false;
      },
    );
  }

  exportexcel() {
    Soho.excel.exportToCsv('Charges', this.items01);
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
      .alert()
      .title('<span>alert</span>')
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

  openError03(errormessage) {
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

  onChangeEvent01(event: any) {
    console.log(event.target.value);
  }

  private initGrid02() {
    const options: SohoDataGridOptions = {
      selectable: 'single',
      disableRowDeactivation: true,
      clickToSelect: true,
      alternateRowShading: true,
      rowHeight: 'extra-small',
      filterable: true,
      userObject: this,
      editable: true,

      columnGroups: [
        { colspan: 24, id: '1', name: 'PO Details' },
        { colspan: 1, id: '', name: '' },
        { colspan: 26, id: '3', name: 'Manufacturing Details' },
        { colspan: 1, id: '', name: '' },
        { colspan: 9, id: '5', name: 'Volume & Pricing Details' },
      ],

      // eslint-disable-line
      cellNavigation: false,
      idProperty: 'col-cuno',
      paging: false,
      pagesize: this.pageSize,
      indeterminate: false,
      columns: [
        {
          id: 'col-p22',
          field: 'SSTAT',
          name: 'Status Self-Bill',
          formatter: customp22Formatter,
          resizable: true,
          filterType: 'text',
          align: 'left',
          width: 320,
          sortable: true,
        },

        {
          id: 'col-p22',
          field: 'F2BLSB',
          name: 'Released',
          resizable: true,
          formatter: Soho.Formatters.Checkbox,
          editor: Soho.Editors.Checkbox,
          align: 'center',
          filterType: 'checkbox',
          sortable: true,
          width: 80,
        },

        {
          id: 'col-p22',
          field: 'MLSTQT',
          name: 'Stock on lotno',
          formatter: customp22Formatter,
          resizable: true,
          filterType: 'number',
          align: 'left',
          sortable: true,
          width: 110,
        },
        {
          id: 'col-p22',
          field: 'VHREND',
          name: 'MO status',
          formatter: customp22Formatter,
          resizable: true,
          filterType: 'text',
          align: 'left',
          sortable: true,
          width: 200,
        },
        {
          id: 'col-p22',
          field: 'VHPCDO',
          name: 'Costing Performed',
          formatter: customp22Formatter,
          resizable: true,
          filterType: 'text',
          align: 'left',
          sortable: true,
          width: 200,
        },
        {
          id: 'col-p01',
          field: 'F2PUNO',
          name: 'PO Number',
          formatter: customp01Formatter,
          resizable: true,
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 120,
        },
        {
          id: 'col-p01',
          field: 'F2PNLI',
          name: 'PO Line',
          formatter: customp01Formatter,
          resizable: true,
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 60,
        },
        {
          id: 'col-p01',
          field: 'F2SUNO',
          name: 'Vendor',
          formatter: customp01Formatter,
          resizable: true,
          sortable: true,
          filterType: 'text',
          singleline: true,
          width: 120,
        },

        {
          id: 'col-p01',
          field: 'IBAGNB',
          name: 'Agreement',
          formatter: customp01Formatter,
          resizable: true,
          sortable: true,
          filterType: 'text',
          singleline: true,
          width: 100,
        },

        {
          id: 'col-p01',
          field: 'IAORTY',
          name: 'PO Type',
          formatter: customp01Formatter,
          resizable: true,
          sortable: true,
          filterType: 'text',
          singleline: true,
          width: 60,
        },

        {
          id: 'col-p22',
          field: 'OBLINT',
          name: 'Direct Order',
          resizable: true,
          formatter: Soho.Formatters.Checkbox,
          align: 'center',
          filterType: 'checkbox',
          sortable: true,
          width: 80,
        },

        {
          id: 'col-p09a',
          field: 'F2ITNO',
          name: 'Item Number',
          formatter: customp09aFormatter,
          resizable: true,
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 110,
        },
        {
          id: 'col-p09a',
          field: 'MMITGR',
          name: 'Item Group',
          formatter: customp09aFormatter,
          resizable: true,
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 110,
        },
        {
          id: 'col-p09b',
          field: 'MMITDS',
          name: 'Description',
          formatter: customp09bFormatter,
          resizable: true,
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 230,
        },
        {
          id: 'col-p11',
          field: 'F2RPQA',
          name: 'Qty Received',
          formatter: customp11Formatter,
          resizable: true,
          align: 'right',
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 90,
        },

        {
          id: 'col-p09b',
          field: 'MMCFI4',
          name: 'Gen.Item Y/N',
          formatter: customp09bFormatter,
          resizable: true,
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 100,
        },

        {
          id: 'col-p11',
          field: 'F2SCOC',
          name: 'Received Cost',
          formatter: customp11Formatter,
          resizable: true,
          align: 'right',
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 95,
        },

        {
          id: 'col-p09',
          field: 'F2BANO',
          name: 'Lot No',
          formatter: customp09Formatter,
          resizable: true,
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 110,
        },
        {
          id: 'col-p02',
          field: 'F2FACI',
          name: 'Facility',
          formatter: customp02Formatter,
          resizable: true,
          sortable: true,
          filterType: 'text',
          singleline: true,
          width: 55,
        },
        {
          id: 'col-p03',
          field: 'F2TRDT',
          name: 'Receipt Date',
          formatter: customp03Formatter,
          resizable: true,
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 110,
        },
        {
          id: 'col-p04',
          field: 'A1ATVA',
          name: 'Plot',
          formatter: customp04Formatter,
          resizable: true,
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 110,
        },
        {
          id: 'col-p04',
          field: 'GROWER',
          name: 'Grower Name',
          formatter: customp04Formatter,
          resizable: true,
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 110,
        },
        {
          id: 'col-p04',
          field: 'GROWAR',
          name: 'Grower Area',
          formatter: customp04Formatter,
          resizable: true,
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 110,
        },
        {
          id: 'col-p05',
          field: 'A2ATVA',
          name: 'Variety',
          formatter: customp05Formatter,
          resizable: true,
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 110,
        },

        {
          id: 'col-p05',
          field: 'A2PVAR',
          name: 'Price Variety',
          formatter: customp05Formatter,
          resizable: true,
          filterType: 'text',
          hidden: true,
          sortable: true,
          singleline: true,
          width: 110,
        },

        {
          id: 'col-p06',
          field: 'A3ATVA',
          name: 'Size Code',
          formatter: customp06Formatter,
          resizable: true,
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 110,
        },
        {
          id: 'col-p07',
          field: 'A4ATVA',
          name: 'Crop Cycle',
          formatter: customp07Formatter,
          resizable: true,
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 110,
        },
        {
          id: 'col-p16',
          field: 'A7ATVN',
          name: 'Threshold',
          formatter: customp16Formatter,
          resizable: true,
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 110,
        },
        {
          id: 'col-p10',
          field: 'A6ATVN',
          name: 'QCRAG',
          formatter: customp10Formatter,
          resizable: true,
          filterType: 'text',
          align: 'right',
          sortable: true,
          singleline: true,
          width: 90,
        },
        {
          id: 'col-p12',
          field: 'blank1',
          name: '',
          formatter: customp12Formatter,
          resizable: true,
          align: 'right',
          sortable: true,
          filterType: 'text',
          singleline: true,
          width: 80,
        },
        {
          id: 'col-p12',
          field: 'ISSU',
          name: 'Qty Issued',
          formatter: customp12Formatter,
          resizable: true,
          align: 'right',
          filterType: 'number',
          sortable: true,
          singleline: true,
          width: 90,
        },
        {
          id: 'col-p12',
          field: 'GOOD',
          name: 'Graded Output',
          formatter: customp12Formatter,
          resizable: true,
          align: 'right',
          sortable: true,
          filterType: 'text',
          singleline: true,
          width: 110,
        },
        {
          id: 'col-p12',
          field: 'WASTEBS3',
          name: 'MO Waste (BS3)',
          formatter: customp12Formatter,
          resizable: true,
          align: 'right',
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 110,
        },
        {
          id: 'col-p12',
          field: 'ISSUEDBS2',
          name: 'QTY Issued(BS2)',
          formatter: customp12Formatter,
          resizable: true,
          align: 'right',
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 110,
        },
        {
          id: 'col-p12',
          field: 'PACKEDBS2',
          name: 'QTY Packed(BS2)',
          formatter: customp12Formatter,
          resizable: true,
          align: 'right',
          sortable: true,
          filterType: 'text',
          singleline: true,
          width: 110,
        },
        {
          id: 'col-p12',
          field: 'MOWaste1',
          name: 'MO Waste %',
          formatter: customp12Formatter,
          resizable: true,
          align: 'right',
          filterType: 'text',
          sortable: true,
          singleline: true,
          width: 90,
        },
        {
          id: 'col-p12',
          field: 'DEDUP',
          name: 'Deduction %',
          formatter: customp12Formatter,
          resizable: true,
          align: 'right',
          filterType: 'text',
          sortable: true,
          width: 90,
          singleline: true,
        },
        {
          id: 'col-p12',
          field: 'DEDUV',
          name: 'Deduction (kg)',
          formatter: customp12Formatter,
          resizable: true,
          align: 'right',
          filterType: 'text',
          sortable: true,
          width: 110,
          singleline: true,
        },
        {
          id: 'col-p12',
          field: 'SETQTY1',
          name: 'Settled Qty',
          formatter: customp12xFormatter,
          resizable: true,
          align: 'right',
          filterType: 'text',
          sortable: true,
          width: 90,
          singleline: true,
        },

        {
          id: 'col-p12',
          field: 'SETQTY2',
          name: 'Overwritten Settled Qty',
          formatter: customp12xFormatter,
          resizable: true,
          align: 'right',
          sortable: true,
          filterType: 'text',
          width: 150,
          singleline: true,
        },

        {
          id: 'col-p12',
          field: 'POexceed',
          name: 'POexceed',
          formatter: customp12bFormatter,
          resizable: true,
          align: 'right',
          filterType: 'text',
          sortable: true,
          width: 90,
          singleline: true,

          hidden: true,
        },
        {
          id: 'col-p13',
          field: 'LMATNR',
          name: 'Attr.No',
          formatter: customp13Formatter,
          resizable: true,
          align: 'right',
          sortable: true,
          width: 90,
          singleline: true,

          hidden: true,
        },
        {
          id: 'col-p13',
          field: 'SOLD',
          name: 'Qty Sold',
          formatter: customp13Formatter,
          resizable: true,
          align: 'right',
          filterType: 'text',
          sortable: true,
          width: 90,
          singleline: true,
        },
        {
          id: 'col-p21',
          field: 'VHORTY',
          name: 'MO Type',
          formatter: customp21Formatter,
          resizable: true,
          filterType: 'text',
          width: 90,
          sortable: true,
          singleline: true,
        },
        {
          id: 'col-p21',
          field: 'VHR01',
          name: 'MO Received Qty ITEM 1',
          formatter: customp21Formatter,
          resizable: true,
          sortable: true,
          width: 110,
          filterType: 'text',
          singleline: true,

          hidden: true,
        },
        {
          id: 'col-p21',
          field: 'VHR02',
          name: 'MO Received QTY ITEM 2',
          formatter: customp21Formatter,
          resizable: true,
          width: 110,
          sortable: true,
          singleline: true,
          hidden: true,
        },
        {
          id: 'col-p21',
          field: 'VHR03',
          name: 'MO Received QTY ITEM 3',
          formatter: customp21Formatter,
          resizable: true,
          sortable: true,
          singleline: true,
          width: 110,
          hidden: true,
        },
        {
          id: 'col-p21',
          field: 'VHR04',
          name: 'MO Received QTY ITEM 4',
          formatter: customp21Formatter,
          resizable: true,
          sortable: true,
          singleline: true,
          width: 110,
          hidden: true,
        },
        {
          id: 'col-p21',
          field: 'VHP01',
          name: 'MO Receipt ITEM 1',
          formatter: customp21Formatter,
          resizable: true,
          sortable: true,
          singleline: true,
          width: 110,
          hidden: true,
        },
        {
          id: 'col-p21',
          field: 'VHP02',
          name: 'MO Receipt ITEM 2',
          formatter: customp21Formatter,
          resizable: true,
          sortable: true,
          singleline: true,
          width: 110,
          hidden: true,
        },
        {
          id: 'col-p21',
          field: 'VHP03',
          name: 'MO Receipt ITEM 3',
          formatter: customp21Formatter,
          resizable: true,
          sortable: true,
          width: 110,
          singleline: true,

          hidden: true,
        },
        {
          id: 'col-p21',
          field: 'VHP04',
          name: 'MO Receipt ITEM 4',
          formatter: customp21Formatter,
          resizable: true,
          sortable: true,
          width: 110,
          singleline: true,

          hidden: true,
        },
        {
          id: 'col-p21',
          field: 'VHL01',
          name: 'MO Price ITEM 1',
          formatter: customp21Formatter,
          resizable: true,
          sortable: true,
          width: 110,
          singleline: true,

          hidden: true,
        },
        {
          id: 'col-p21',
          field: 'VHL02',
          name: 'MO Price ITEM 2',
          formatter: customp21Formatter,
          resizable: true,
          sortable: true,
          width: 110,
          singleline: true,

          hidden: true,
        },
        {
          id: 'col-p21',
          field: 'VHL03',
          name: 'MO Price ITEM 3',
          formatter: customp21Formatter,
          resizable: true,
          width: 110,
          sortable: true,
          singleline: true,

          hidden: true,
        },
        {
          id: 'col-p21',
          field: 'VHL04',
          name: 'MO Price ITEM 4',
          formatter: customp21Formatter,
          resizable: true,
          sortable: true,
          width: 110,
          singleline: true,

          hidden: true,
        },
        {
          id: 'col-p12',
          field: 'blank2',
          name: '',
          formatter: customp12Formatter,
          resizable: true,
          align: 'right',
          sortable: true,
          width: 80,
          singleline: true,
        },
        {
          id: 'col-p23',
          field: 'CQTY',
          name: 'Contract (kg)',
          formatter: customp23Formatter,
          resizable: true,
          align: 'right',
          width: 115,
          filterType: 'text',
          sortable: true,
        },
        {
          id: 'col-p23',
          field: 'CPCT',
          name: 'Contract %',
          formatter: customp23Formatter,
          resizable: true,
          align: 'right',
          width: 115,
          filterType: 'text',
          sortable: true,
        },
        {
          id: 'col-p23',
          field: 'CPRRF',
          name: 'Contract Price(£)',
          formatter: customp23Formatter,
          resizable: true,
          align: 'right',
          filterType: 'text',
          width: 115,
          sortable: true,
        },
        {
          id: 'col-p22',
          field: 'FQTY',
          name: 'Freebuy (kg)',
          formatter: customp22Formatter,
          resizable: true,
          filterType: 'text',
          align: 'right',
          width: 115,
          sortable: true,
        },
        {
          id: 'col-p22',
          field: 'FPRRF',
          name: 'Freebuy Price(£)',
          formatter: customp22Formatter,
          resizable: true,
          width: 115,
          align: 'right',
          filterType: 'text',
          sortable: true,
        },
        {
          id: 'col-p25',
          field: 'APRRF',
          name: 'Blended £',
          formatter: customp25Formatter,
          resizable: true,
          align: 'right',
          width: 115,
          filterType: 'text',
          sortable: true,
        },

        {
          id: 'col-p25',
          field: 'IBUDN1',
          name: 'SPOT Price',
          formatter: customp25Formatter,
          resizable: true,
          align: 'right',
          width: 115,
          filterType: 'text',
          sortable: true,
        },

        {
          id: 'col-p25',
          field: 'GRVAL',
          name: 'GR VALUE',
          formatter: customp25Formatter,
          resizable: true,
          align: 'right',
          width: 115,
          filterType: 'text',
          sortable: true,
        },

        {
          id: 'col-p25',
          field: 'GRVAR',
          name: 'GR VARIANCE',
          formatter: customp25Formatter,
          resizable: true,
          filterType: 'text',
          width: 115,
          align: 'right',
          sortable: true,
        },
      ],

      dataset: [],
      emptyMessage: {
        title: '',
        icon: 'icon-empty-no-data',
      },
    };
    this.datagridOptions02 = options;
  }

  onClick1(args: SohoDataGridColumnClickData[]): void {
    //update various attributes
    this.updateAttr_MOWastage(this.sMOWaste);
  }

  onClick(args: SohoDataGridColumnClickData[]): void {
    this.applicationService.launch(
      'bookmark?program=PPS200&panel=E&tableName=MPHEAD&source=Web&option=2&keys=IACONO%2C' +
        this.currentCompany +
        '%2CIAPUNO%2C' +
        this.sPUNO +
        '&LogicalId=lid://infor.m3.m3',
    );
  }

  updateAttr_MOWastage(mowaste: any) {
    this.userService.getUserContext().subscribe(
      (context) => {
        const input = new MIRecord();
        input.setString('ATNR', this.attributeno);
        input.setString('ATID', 'MOWASTAGE');
        input.setString('ATVA', mowaste);
        const request: IMIRequest = {
          program: 'ATS101MI',
          transaction: 'SetAttrValue',
          record: input,
          maxReturnedRecords: this.maxRecords,
        };
        this.miService.execute(request).subscribe(
          (response: IMIResponse) => {
            if (!response.hasError()) {
              //          this.openError02('MOWastage has been updated to ' + mowaste + ' for item ' + this.sITNO + ' and lotnumber ' + this.sBANO);
            } else {
            }
          },
          (error) => {
            //     this.openError02(error.errorMessage);
          },
        );
      },
      (error) => {},
    );

    setTimeout(() => {
      //refresh widget
      this.triggerBusinessContext_01('refresh');
    }, 3000);
  }

  private updateGridData() {
    this.datagrid02
      ? (this.datagrid02.dataset = this.items02)
      : (this.datagridOptions02.dataset = this.items02);
  }

  onRowDeselected(f2bano: string) {
    // Custom logic when a row is left
    alert(`Row with AGATID ${f2bano} was deselected or left`);
  }

  private lastSelectedF2BANO: string | null = null;

  async onSelected01(args: any[], isSingleSelect?: boolean) {
    const newCount = args.length;
    const selected = args && newCount === 1 ? args[0].data : null;
    this.hasSelected = !!selected;
    if (this.hasSelected) {
      console.log(selected.AGATID);
      this.sITNO = selected.F2ITNO;
      this.sBANO = selected.F2BANO;
      this.sISSU = selected.ISSU;
      this.sPUNO = selected.F2PUNO;

      // Detect deselection or change
      if (
        this.lastSelectedF2BANO &&
        (!selected || selected.F2BANO !== this.lastSelectedF2BANO)
      ) {
        this.onRowDeselected(this.lastSelectedF2BANO); // Fire your "left record" logic
      }

      this.qcurValue = '';

      //getcurrentvalue
      try {
        this.respCurVal = await lastValueFrom(
          this.dataService.getAttributeValue(
            this.sITNO,
            this.sBANO,
            'CALC_INV_VALUE',
          ),
        );

        //check received qty on finished product versus po receipts to calculate MO Wastage
        for (let q = 0; q < this.respCurVal.items.length; q++) {
          const item34 = this.respCurVal.items[q];

          this.qcurValue = parseFloat(item34.AGATVN).toFixed(2);
        }
      } catch (error) {}

      this.qPriceOver = '';

      //get_overprice
      try {
        this.respCurVal = await lastValueFrom(
          this.dataService.getAttributeValue(
            this.sITNO,
            this.sBANO,
            'PRICEOVERS',
          ),
        );

        //check received qty on finished product versus po receipts to calculate MO Wastage
        for (let q = 0; q < this.respCurVal.items.length; q++) {
          const item34 = this.respCurVal.items[q];

          this.qPriceOver = item34.AGATVN;
        }
      } catch (error) {}

      this.qPriceUnder = '';

      //get_underprice
      try {
        this.respCurVal = await lastValueFrom(
          this.dataService.getAttributeValue(
            this.sITNO,
            this.sBANO,
            'PRICEUNDERS',
          ),
        );

        //check received qty on finished product versus po receipts to calculate MO Wastage
        for (let q = 0; q < this.respCurVal.items.length; q++) {
          const item34 = this.respCurVal.items[q];

          this.qPriceUnder = item34.AGATVN;
        }
      } catch (error) {}

      //selected lot push to mainscreen
      this.selected_lot = selected.F2ITNO + '- ' + selected.MMITDS;
      this.selected_lot02 = 'lotno: ' + selected.F2BANO;

      console.log('teste' + selected.SETQTY2);

      this.interactionService.sendMessage('pvar' + '~' + selected.A2PVAR);
      this.interactionService.sendMessage('puno' + '~' + selected.F2PUNO);
      this.interactionService.sendMessage('itno' + '~' + selected.F2ITNO);
      this.interactionService.sendMessage('bano' + '~' + selected.F2BANO);
      this.interactionService.sendMessage('rpqa' + '~' + selected.F2RPQA);
      this.interactionService.sendMessage('csett' + '~' + selected.SETQTY1);
      this.interactionService.sendMessage('osett' + '~' + selected.SETQTY2);
      this.interactionService.sendMessage('aprice' + '~' + selected.APRRF);
      this.interactionService.sendMessage('fgtp' + '~' + selected.SSTAT);
      this.interactionService.sendMessage('itds' + '~' + selected.MMITDS);
      this.interactionService.sendMessage('atnr' + '~' + selected.LMATNR);
      this.interactionService.sendMessage('showb');

      //attributes to confirm
      this.attributeno = selected.LMATNR;
      this.sIssuedQTY = selected.ISSU;
      this.sMOWaste = selected.MOWASTE;
      this.sContractPercentage = selected.CPCT;
      this.sContractQty = selected.CQTY;
      this.sContractPrice = selected.CPRRF;
      this.sFreeBuyPrice = selected.FPRRF;
      this.sFreeBuyQty = selected.FQTY;
      this.sAssignedPrice = selected.APRRF;
      this.sItemGroup = selected.MMITGR;
      this.sMOType = selected.VHORTY;
      this.sCalcSettledQty = selected.SQTRQT;

      this.sReceivedMOItem1 = selected.VHR01X;
      this.sReceivedMOItem2 = selected.VHR02X;
      this.sReceivedMOItem3 = selected.VHR03X;
      this.sReceivedMOItem4 = selected.VHR04X;

      this.sReceiptItem1 = selected.VHP01;
      this.sReceiptItem2 = selected.VHP02;
      this.sReceiptItem3 = selected.VHP03;
      this.sReceiptItem4 = selected.VHP04;

      this.sReceiptPrice1 = selected.VHL01;
      this.sReceiptPrice2 = selected.VHL02;
      this.sReceiptPrice3 = selected.VHL03;
      this.sReceiptPrice4 = selected.VHL04;

      this.interactionService.sendMessage('vhr01' + '~' + selected.VHR01);
      this.interactionService.sendMessage('vhr02' + '~' + selected.VHR02);
      this.interactionService.sendMessage('vhr03' + '~' + selected.VHR03);
      this.interactionService.sendMessage('vhr04' + '~' + selected.VHR04);
      this.interactionService.sendMessage('vhp01' + '~' + selected.VHP01);
      this.interactionService.sendMessage('vhp02' + '~' + selected.VHP02);
      this.interactionService.sendMessage('vhp03' + '~' + selected.VHP03);
      this.interactionService.sendMessage('vhp04' + '~' + selected.VHP04);
      this.interactionService.sendMessage('vhl01' + '~' + selected.VHL01);
      this.interactionService.sendMessage('vhl02' + '~' + selected.VHL02);
      this.interactionService.sendMessage('vhl03' + '~' + selected.VHL03);
      this.interactionService.sendMessage('vhl04' + '~' + selected.VHL04);

       this.interactionService.sendMessage('idkg' + '~' + selected.DEDUV);
       this.interactionService.sendMessage('idpc' + '~' + selected.DEDUP);

      this.interactionService.sendMessage('itgr' + '~' + selected.MMITGR);
      this.interactionService.sendMessage('mowaste' + '~' + selected.MOWaste1);
      this.interactionService.sendMessage('thres' + '~' + selected.A7ATVN);
      this.interactionService.sendMessage('variety' + '~' + selected.A2ATVA);
      this.interactionService.sendMessage('field' + '~' + selected.A1ATVA);
      this.interactionService.sendMessage('growername' + '~' + selected.GROWER);
      this.interactionService.sendMessage('growerarea' + '~' + selected.GROWAR);
      this.interactionService.sendMessage('icrop' + '~' + selected.A4ATVA);
      this.interactionService.sendMessage('freebuy' + '~' + selected.FPRRF);
      this.interactionService.sendMessage('contract' + '~' + selected.CPRRF);
      this.interactionService.sendMessage('contractperc' + '~' + selected.CPCT);
      this.interactionService.sendMessage('assignedp' + '~' + selected.APRRF);
      this.interactionService.sendMessage('issued' + '~' + selected.ISSU);
      this.interactionService.sendMessage('sold' + '~' + selected.SOLD);
      this.interactionService.sendMessage('mo' + '~' + selected.VHORTY);
      this.interactionService.sendMessage('porec' + '~' + selected.F2RPQA);
      this.interactionService.sendMessage('icalcinv' + '~' + this.qcurValue);

      this.interactionService.sendMessage('ipriceover' + '~' + this.qPriceOver);
      this.interactionService.sendMessage(
        'ipriceunder' + '~' + this.qPriceUnder,
      );

      this.interactionService.sendMessage('igrvar' + '~' + selected.GRVAR);

      this.interactionService.sendMessage(
        'iprojectedinv' + '~' + selected.GRVAL,
      );

      this.interactionService.sendMessage('icalcvar' + '~' + selected.GRVAR);
      this.interactionService.sendMessage(
        'ipackedbs2' + '~' + selected.PACKEDBS2,
      );

      this.interactionService.sendMessage('size' + '~' + selected.A3ATVA);

      this.calculateUnderOver(this.sBANO);
      this.triggerBusinessContext(this.sITNO, this.sBANO);
    }
  }

  async calculateUnderOver(bano) {
    //
    this.sumk = [];
    //
    try {
      this.respGR003x = await lastValueFrom(this.dataService.GR002(bano));

      //check received qty on finished product versus po receipts to calculate MO Wastage
      for (let x = 0; x < this.respGR003x.items.length; x++) {
        const item3 = this.respGR003x.items[x];

        try {
          this.respGR004xx = await lastValueFrom(
            this.dataService.GR003A(this.tFACI, item3.MTRIDN),
          );

          //check received qty on finished product versus po receipts to calculate MO Wastage
          for (let y = 0; y < this.respGR004xx.items.length; y++) {
            const item44 = this.respGR004xx.items[y];
            console.log('testr' + item44.VHMFNO);

            try {
              this.respGR004x = await lastValueFrom(
                this.dataService.GR003(item44.VHMFNO),
              );

              //check received qty on finished product versus po receipts to calculate MO Wastage
              for (let y = 0; y < this.respGR004x.items.length; y++) {
                const item4 = this.respGR004x.items[y];

                console.log('testr' + item4.MTITNO);

                this.sumk.push({
                  code: item4.MTITNO,
                  value: parseFloat(item4.MTTRQT),
                });
              }
            } catch (error) {}
          }
        } catch (error) {}
      }
    } catch (error) {}

    this.sumUN = null;
    this.sumOV = null;

    console.log('qqw ' + JSON.stringify(this.sumk));

    this.sumUN = this.sumk
      .filter((item) => item.code.endsWith('UN'))
      .reduce((sum, item) => sum + item.value, 0);

    this.sumOV = this.sumk
      .filter((item) => item.code.endsWith('OV'))
      .reduce((sum, item) => sum + item.value, 0);

    this.interactionService.sendMessage('unders' + '~' + this.sumUN);
    this.interactionService.sendMessage('overs' + '~' + this.sumOV);
  }

  onClick3(args: SohoDataGridColumnClickData[]): void {
    this.applicationService.launch(
      'bookmark?program=APS450&startPanel=B&includeStartPanel=True&tableName=FAPIBH&sortingOrder=2&source=MForms&view=STD02-01&requirePanel=True&keys=E5CONO%2C' +
        this.currentCompany +
        '%2CE5DIVI%2C' +
        this.currentDivision +
        '%2CE5INBN%2C%20&parameters=XXSINO%2C' +
        this.suppinv01 +
        '&fields=W2OBKV%2C' +
        this.suppinv01 +
        '%2CW3OBKV%2C%2520&LogicalId=lid://infor.m3.m3',
    );
  }

  triggerBusinessContext_01(refresh) {
    try {
      var type = 'inforBusinessContext';
      var data = {
        screenId: 'm3_GrowerReturns',
        entities: [
          {
            entityType: 'Refresh_Widget',
            accountingEntity: this.currentCompany + '_' + this.currentDivision,
            visible: true,
            id1: refresh,
            drillbackURL:
              '?LogicalId=lid://infor.m3.m3&program=OIS390&fieldNames=W1REPN,400000047,W1CUNO,,WWWHLO,SNV,WFCRSB,0,WTCRSB,2&includeStartPanel=True&source=MForms&requirePanel=True&sortingOrder=1&tableName=OCHEAD&keys=OCCONO,' +
              this.currentCompany +
              ',OCWHLO,+,OCREPN,+,OCCUNO,+&startpanel=B',
          },
        ],
        session: {
          cono: this.currentCompany,
          divi: this.currentDivision,
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
        program: 'OIS390',
        panel: 'B1',
        screenIdBase: 'OIS390',
      };
      window.parent['infor'].companyon.client.registerMessageHandler;
      window.parent['infor'].companyon.client.sendMessage(type, data);
    } catch (err) {
      //Odin.Log.error("Error in MainCtrl_triggerBusinessContext: " + err);
    }
  }

  private setBusy(isBusy: boolean) {
    this.isBusy = isBusy;
  }

  private triggerBusinessContext(itno, bano) {
    try {
      var type = 'inforBusinessContext';
      var data = {
        screenId: 'm3_GrowerReturns',
        entities: [
          {
            entityType: 'GrowerReturns',
            accountingEntity: this.currentCompany + '_' + this.currentDivision,
            visible: true,
            id1: itno,
            id2: bano,
            drillbackURL:
              '?LogicalId=lid://infor.m3.m3&program=OIS390&fieldNames=W1REPN,400000047,W1CUNO,,WWWHLO,SNV,WFCRSB,0,WTCRSB,2&includeStartPanel=True&source=MForms&requirePanel=True&sortingOrder=1&tableName=OCHEAD&keys=OCCONO,' +
              this.currentCompany +
              ',OCWHLO,+,OCREPN,+,OCCUNO,+&startpanel=B',
          },
        ],
        session: {
          cono: this.currentCompany,
          divi: this.currentDivision,
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
        program: 'OIS390',
        panel: 'B1',
        screenIdBase: 'OIS390',
      };

      window.parent['infor'].companyon.client.registerMessageHandler;
      window.parent['infor'].companyon.client.sendMessage(type, data);
    } catch (err) {
      //Odin.Log.error("Error in MainCtrl_triggerBusinessContext: " + err);
    }
  }

  private handleError(message: string, error?: any) {
    this.logError(message, error ? '- Error: ' + JSON.stringify(error) : '');
    const buttons = [
      {
        text: 'Ok',
        click: (e, modal) => {
          modal.close();
        },
      },
    ];
    this.messageService
      .error()
      .title('An error occured')
      .message(
        message + '. More details might be available in the browser console.',
      )
      .buttons(buttons)
      .open();
  }
}
