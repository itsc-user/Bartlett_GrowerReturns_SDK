import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Log } from '@infor-up/m3-odin';
import { M3OdinModule } from '@infor-up/m3-odin-angular';
import { SohoComponentsModule } from 'ids-enterprise-ng'; // TODO Consider only importing individual SoHo modules in production
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { HomepagesComponent } from './homepages/homepages.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReceiptdateComponent } from './receiptdate/receiptdate.component';
import { SupplierComponent } from './supplier/supplier.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

const appRoutes: Routes = [{ path: '', component: MainscreenComponent }];

@NgModule({
  declarations: [
    AppComponent,
    MainscreenComponent,
    HomepagesComponent,
    TabsComponent,
    ReceiptdateComponent,
    SupplierComponent,
    WarehouseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SohoComponentsModule,
    M3OdinModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'en-US',
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (locale: string) => () => {
        Soho.Locale.culturesPath = 'assets/ids-enterprise/js/cultures/';
        return Soho.Locale.set(locale).catch((err) => {
          Log.error('Failed to set IDS locale', err);
        });
      },
      deps: [LOCALE_ID],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
