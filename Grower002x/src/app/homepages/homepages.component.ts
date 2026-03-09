import { Component, OnInit, AfterViewInit, Output, EventEmitter, ViewContainerRef, ViewChild, Inject, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { CoreBase, IMIRequest, IMIResponse, MIRecord, IUserContext } from '@infor-up/m3-odin';
import { MIService, UserService, ApplicationService, DatePipe } from '@infor-up/m3-odin-angular';
import { SohoDataGridComponent, SohoMessageService, SohoModalDialogService, SohoBusyIndicatorDirective, SohoIconUtils, SohoMessageRef, SohoDataGridService, SohoToastService, SohoModalDialogRef } from 'ids-enterprise-ng';
import { InteractionService } from '../interaction.service';
import { Router, ActivatedRoute } from '@angular/router';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { enableDebugTools } from '@angular/platform-browser';
import { GlobalStore } from '../../store/global-store';
interface ControlValueAccessor {
   writeValue(obj: any): void
   registerOnChange(fn: any): void
   registerOnTouched(fn: any): void
   setDisabledState(isDisabled: boolean): void
}

interface IIResponse {
   id: string;
}

@Component({
   selector: 'app-homepages',
   templateUrl: './homepages.component.html',
   styleUrls: ['./homepages.component.css']
})
export class HomepagesComponent extends CoreBase implements OnInit {


Apply1() {


   this._interactionService.sendMessage('applyfilters');

}
Apply: any;


gr_processed() {

  this.applicationService.launch('?LogicalId=lid://infor.m3.m3&title=Grower Returns- Processed&program=/mne/apps/grower003x/');


}
gr_inprogress() {

     this.applicationService.launch('?LogicalId=lid://infor.m3.m3&title=Grower Returns- Ready to Process&program=/mne/apps/grower001x/');


}
   SUNM: any;
   suno: string;
   userContext = {} as IUserContext;
   isBusy = false;
   company: string;
   currentCompany: string;
   division: string;
   currentDivision: string;
   language: string;
   currentLanguage: string;
   model: any;
   single01s: string;
   single02s: string;
   curcono: string;
   curcono01: string;
   curtask: string;
   question: any;
   answer: any;

   // tslint:disable-next-line:variable-name
   constructor(private toastService: SohoToastService,  private applicationService: ApplicationService, private _interactionService: InteractionService, private miService: MIService, private userService: UserService) {
      super('HomepagesComponent');

      this.userService.getUserContext().subscribe((userContext: IUserContext) => {
         this.userContext = userContext;
         const lang = userContext.currentLanguage;
         const divi = userContext.currentDivision;
         this.curcono = userContext.currentCompany;
         const usid = userContext.USID;
         this.logInfo('User context: ' + usid + ', cono: ' + this.curcono + ', divi: ' + divi + ', lang: ' + lang);
      }, (errorContext: IUserContext) => {
         // Handle error
         this.logError(errorContext.errorMessage);
      });
   }

   // tslint:disable-next-line:typedef
   ngOnInit() {
      this._interactionService.Message$
         .subscribe(message => {
            if (message.split('~')[0] === 'supplier_details') {
               this.suno = message.split('~')[1]; this.getsupplierdetails(this.suno);
            }
            console.log(message);
         });
   }

   getsupplierdetails(suno) {
      const input = new MIRecord();
      input.setString('SUNO', suno);
      this.userService.getUserContext().subscribe((context) => {
         const request: IMIRequest = {
            program: 'CRS620MI',
            transaction: 'GetBasicData',
            record: input,
            outputFields: ['SUNO', 'SUNM'],
            maxReturnedRecords: 5000
         };

         this.miService.execute(request).subscribe((response: IMIResponse) => {
            if (!response.hasError()) {
               response.items.forEach(element => {
                  this.SUNM = suno + '- ' + element.SUNM;
               });
            } else {
            }
            this.setBusy(false);
         }, (error) => {
            this.setBusy(false);
         });
      }, (error) => {
         this.setBusy(false);
      });
   }

   onClickLoad(): void {
      this.logInfo('onClickLoad');
      this.setBusy(true);
      this.userService.getUserContext().subscribe((userContext: IUserContext) => {
         this.setBusy(false);
         this.logInfo('onClickLoad: Received user context');
         this.userContext = userContext;
         this.updateUserValues(userContext);
      }, (error) => {
         this.setBusy(false);
         this.logError('Unable to get userContext ' + error);
      });
   }

   onChange: any = () => { alert('oncg') };

   exportToExcel() {
      this._interactionService.sendMessage('exportexcel');
   }

   goAPS450() {
      this._interactionService.sendMessage('goAPS450');
   }

   generateinvoice() {
      this._interactionService.sendMessage('invoice');
   }

   iOperations() {
      this._interactionService.sendMessage('ioperations');
   }

   runReport() {
      this._interactionService.sendMessage('runreport');
      this.curcono01 = 'curcono' + '~' + this.curcono;
      this._interactionService.sendMessage(this.curcono01);
   }

   updateUserValues(userContext: IUserContext) {
      this.company = userContext.company;
      this.division = userContext.division;
      this.language = userContext.language;

      this.currentCompany = userContext.currentCompany;
      this.currentDivision = userContext.currentDivision;
      this.currentLanguage = userContext.currentLanguage;
   }

   private setBusy(isBusy: boolean) {
      this.isBusy = isBusy;
   }
}
