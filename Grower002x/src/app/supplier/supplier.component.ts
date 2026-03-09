// Remco Driessen, Grower Returns, Feb 2025

import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import { SohoLookupComponent } from 'ids-enterprise-ng';
import {
  SohoToastService,
  SohoMessageService,
  SohoDropDownComponent,
  SohoSpinboxComponent,
} from 'ids-enterprise-ng';
import {
  IMIRequest,
  IMIResponse,
  MIRecord,
  ArrayUtil,
  CoreBase,
  IUserContext,
} from '@infor-up/m3-odin';
import { MIService, UserService } from '@infor-up/m3-odin-angular';
import { GlobalStore } from '../../store/global-store';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
})
export class SupplierComponent implements AfterViewInit {
  @ViewChild(SohoDropDownComponent, { static: true })
  dropDownComponent: SohoDropDownComponent;

  userContext = {} as IUserContext;
  /** Defautl selected item.  */
  model = {
    selectedOption: 'ND',
    workcenter02: null,
    selectedOptionXss: null,
    workcenter01: null,
    nocopies: 1,
  };

  showModel = false;

  /** Used the html to comntrol the options. */
  options = [];
  isBusy = false;
  isDetailBusy = false;
  prt01s: string;
  currentDivision: string;
  currentCompany: string;
  currentUser: string;
  public id2 = 'limited-spinbox';
  public val = 5;
  nocopiess: string;
  supp01s: string;
  supp02s: string;
  supplier: any;

  // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:variable-name
  constructor(
    private _interactionService: InteractionService,
    private miService: MIService,
    private globalStore: GlobalStore,
    private userService: UserService,
    private messageService: SohoMessageService
  ) {}

  ngAfterViewInit() {
    this.initialise();
    this.userService.getUserContext().subscribe(
      (userContext: IUserContext) => {
        this.setBusy(false);
        this.userContext = userContext;
        this.UserValues(userContext);
      },
      (error) => {
        this.setBusy(false);
      }
    );
  }

  UserValues(userContext: IUserContext) {
    this.currentCompany = userContext.currentCompany;
    this.currentDivision = userContext.currentDivision;
    this.currentUser = userContext.USID;
    this.listSuppliers();
  }
  toggleModel() {
    this.showModel = !this.showModel;
  }

  initialise() {
    // Retrieve data from AJAX service and call resonse.
    // setTimeout simulates the behaviour of a rest service
  }

  supp01(updatedValue) {
    this.model.workcenter01 = updatedValue;
  }

  listSuppliers() {
    const input = new MIRecord();
    this.userService.getUserContext().subscribe(
      (context) => {
        const request: IMIRequest = {
          program: 'CRS620MI',
          transaction: 'LstSuppliers',
          record: input,
          outputFields: ['SUNO', 'SUNM'],
          maxReturnedRecords: 5000,
        };

        this.miService.execute(request).subscribe(
          (response: IMIResponse) => {
            this.options.push({ value: '', label: '' });
            if (!response.hasError()) {
              response.items.forEach((element) => {
                if (element.SUNO !== '') {
                  this.options.push({
                    value: element.SUNO,
                    label: element.SUNO + '-' + element.SUNM,
                  });
                }
              });
            } else {
            }
            this.setBusy(false);
          },
          (error) => {
            this.setBusy(false);
          }
        );
      },
      (error) => {
        this.setBusy(false);
      }
    );
  }

  onUpdated(event: SohoDropDownEvent) {
    console.log(`updated ${event.data}`);
  }

  onChange(event: SohoDropDownEvent) {
    this.globalStore.setSUNO(event.data);

    console.log('supplier: ' + this.options);

    this._interactionService.sendMessage('supplier_details' + '~' + event.data);
    this.isBusy = true;
  }

  private setBusy(isBusy: boolean) {
    this.isBusy = isBusy;
  }
}
