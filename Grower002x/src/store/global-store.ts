import { Injectable } from '@angular/core';
import { Store } from './store';
import { IUserContext, MIRecord } from '@infor-up/m3-odin';

class GlobalState {
   isBusy = false;
   userContext = {} as IUserContext;

   ITNO = '';
   FUDS = '';
   BANO = '';
   WHLO = '';
   WHSL = '';
   FUDSRetrieved = false;
   ATNR = '';
   PRDT = '';
   PACT = '';
   PRGP = '';
   UNMS = '';
   AGNB = '';
   ITGR = '';
   REOP = '';
   UNMU = '';
   ITCL = '';
   TMPL = '';
   TAB = '';
   CHK1 = '';
   DIGI = '';
   FCCM = '';
   SUNO = '';
   SUDO = '';
   NOTE = '';
   PR = '';
   PW = '';
   SUWH = '';
   RESP = '';
   MOQT = '';
   ITPL = '';
   CSCD = '';
   SITE = '';
   PUPR = '';
   PRCD = '';
   ITDS = '';
   ITNOM = '';
   MXST = '';
   ABCD = '';
   to='';
   from='';
   ITTY = '';

   LOQT = '';
   STAT = '';
   SSQT = '';
   EOQM = '';
   CAR1 = '';
   LEA1 = '';
   ORTY = '';
   ORCO = '';
   SAPR = '';
   BUYE = '';
   CFI1 = '';
   CFI3 = '';
   DPID = '';
   CFI4 = '';
   PANR = '';
   PANM = '';
   DLIX = '';
   valitem: any[];

}

@Injectable({ providedIn: 'root' })
export class GlobalStore extends Store<GlobalState> {
   setvalitems: any;

   constructor() {
      super(new GlobalState());
   }

   // tslint:disable-next-line: typedef
   setBusy(isBusy: boolean) {
      this.setState({ ...this.state, isBusy });
   }

   setUserContext(userContext: IUserContext) {
      this.setState({ ...this.state, userContext });
   }

   getUserContext() {
      return this.state.userContext;
   }

   setITNO(item: any) {
      this.setState({ ...this.state, ITNO: item });
   }
   getITNO() {
      return this.state.ITNO;
   }

   setSUDO(item: any) {
      this.setState({ ...this.state, SUDO: item });
   }
   getSUDO() {
      return this.state.SUDO;
   }


    setfrom(item: any) {
      this.setState({ ...this.state, from: item });
   }
   getfrom() {
      return this.state.from;
   }

    setto(item: any) {
      this.setState({ ...this.state, to: item });
   }
   getto() {
      return this.state.to;
   }



   setTAB(item: any) {
      this.setState({ ...this.state, TAB: item });
   }
   getTAB() {
      return this.state.TAB;
   }


   setSUNO(item: any) {
      this.setState({ ...this.state, SUNO: item });
   }
   getSUNO() {
      return this.state.SUNO;
   }

   setAGNB(item: any) {
      this.setState({ ...this.state, AGNB: item });
   }
   getAGNB() {
      return this.state.AGNB;
   }


   setSAPR(item: any) {
      this.setState({ ...this.state, SAPR: item });
   }
   getSAPR() {
      return this.state.SAPR;
   }


   setCAR1(item: any) {
      this.setState({ ...this.state, CAR1: item });
   }
   getCAR1() {
      return this.state.CAR1;
   }


   setvalitem(item: any) {
      this.setState({ ...this.state, valitem: item });
   }
   getvalitem() {
      return this.state.valitem;
   }




   setPUPR(item: any) {
      this.setState({ ...this.state, PUPR: item });
   }
   getPUPR() {
      return this.state.PUPR;
   }

   setITNOM(item: any) {
      this.setState({ ...this.state, ITNOM: item });
   }
   getITNOM() {
      return this.state.ITNOM;
   }


   setCHK1(item: any) {
      this.setState({ ...this.state, CHK1: item });
   }
   getCHK1() {
      return this.state.CHK1;
   }


   setPR(item: any) {
      this.setState({ ...this.state, PR: item });
   }
   getPR() {
      return this.state.PR;
   }

   setPW(item: any) {
      this.setState({ ...this.state, PW: item });
   }
   getPW() {
      return this.state.PW;
   }

   setREOP(item: any) {
      this.setState({ ...this.state, REOP: item });
   }
   getREOP() {
      return this.state.REOP;
   }

   setMXST(item: any) {
      this.setState({ ...this.state, MXST: item });
   }
   getMXST() {
      return this.state.MXST;
   }


   setMOQT(item: any) {
      this.setState({ ...this.state, MOQT: item });
   }
   getMOQT() {
      return this.state.MOQT;
   }



   setEOQM(item: any) {
      this.setState({ ...this.state, EOQM: item });
   }
   getEOQM() {
      return this.state.EOQM;
   }


   setITPL(item: any) {
      this.setState({ ...this.state, ITPL: item });
   }
   getITPL() {
      return this.state.ITPL;
   }


   setITTY(item: any) {
      this.setState({ ...this.state, ITTY: item });
   }
   getITTY() {
      return this.state.ITTY;
   }


   setITDS(item: any) {
      this.setState({ ...this.state, ITDS: item });
   }
   getITDS() {
      return this.state.ITDS;
   }



   setSITE(item: any) {
      this.setState({ ...this.state, SITE: item });
   }
   getSITE() {
      return this.state.SITE;
   }


   setLEA1(item: any) {
      this.setState({ ...this.state, LEA1: item });
   }
   getLEA1() {
      return this.state.LEA1;
   }


   setLOQT(item: any) {
      this.setState({ ...this.state, LOQT: item });
   }
   getLOQT() {
      return this.state.LOQT;
   }



   setSTAT(item: any) {
      this.setState({ ...this.state, STAT: item });
   }
   getSTAT() {
      return this.state.STAT;
   }






   setNOTE(item: any) {
      this.setState({ ...this.state, NOTE: item });
   }
   getNOTE() {
      return this.state.NOTE;
   }




   setUNMU(item: any) {
      this.setState({ ...this.state, UNMU: item });
   }
   getUNMU() {
      return this.state.UNMU;
   }

   setSSQT(item: any) {
      this.setState({ ...this.state, SSQT: item });
   }
   getSSQT() {
      return this.state.SSQT;
   }


   setRESP(item: any) {
      this.setState({ ...this.state, RESP: item });
   }
   getRESP() {
      return this.state.RESP;
   }

   setABCD(item: any) {
      this.setState({ ...this.state, ABCD: item });
   }
   getABCD() {
      return this.state.ABCD;
   }

   setORCO(item: any) {
      this.setState({ ...this.state, ORCO: item });
   }
   getORCO() {
      return this.state.ORCO;
   }


   setCSCD(item: any) {
      this.setState({ ...this.state, CSCD: item });
   }
   getCSCD() {
      return this.state.CSCD;
   }


   setBUYE(item: any) {
      this.setState({ ...this.state, BUYE: item });
   }
   getBUYE() {
      return this.state.BUYE;
   }

   setSUWH(item: any) {
      this.setState({ ...this.state, SUWH: item });
   }
   getSUWH() {
      return this.state.SUWH;
   }


   setFCCM(item: any) {
      this.setState({ ...this.state, FCCM: item });
   }
   getFCCM() {
      return this.state.FCCM;
   }


   setPRCD(item: any) {
      this.setState({ ...this.state, PRCD: item });
   }
   getPRCD() {
      return this.state.PRCD;
   }

   setORTY(item: any) {
      this.setState({ ...this.state, ORTY: item });
   }
   getORTY() {
      return this.state.ORTY;
   }

   setDPID(item: any) {
      this.setState({ ...this.state, DPID: item });
   }
   getDPID() {
      return this.state.DPID;
   }


   setTMPL(item: any) {
      this.setState({ ...this.state, TMPL: item });
   }
   getTMPL() {
      return this.state.TMPL;
   }



   setPACT(item: any) {
      this.setState({ ...this.state, PACT: item });
   }
   getPACT() {
      return this.state.PACT;
   }

   setDIGI(item: any) {
      this.setState({ ...this.state, DIGI: item });
   }
   getDIGI() {
      return this.state.DIGI;
   }

   setITGR(item: any) {
      this.setState({ ...this.state, ITGR: item });
   }
   getITGR() {
      return this.state.ITGR;
   }

   setITCL(item: any) {
      this.setState({ ...this.state, ITCL: item });
   }
   getITCL() {
      return this.state.ITCL;
   }

   setCFI4(item: any) {
      this.setState({ ...this.state, CFI4: item });
   }
   getCFI4() {
      return this.state.CFI4;
   }

   setUNMS(item: any) {
      this.setState({ ...this.state, UNMS: item });
   }
   getUNMS() {
      return this.state.UNMS;
   }

   setCFI3(item: any) {
      this.setState({ ...this.state, CFI3: item });
   }
   getCFI3() {
      return this.state.CFI3;
   }

   setPANR(item: any) {
      this.setState({ ...this.state, PANR: item });
   }
   getPANR() {
      return this.state.PANR;
   }

   setPRGP(item: any) {
      this.setState({ ...this.state, PRGP: item });
   }
   getPRGP() {
      return this.state.PRGP;
   }



   setDLIX(item: any) {
      this.setState({ ...this.state, DLIX: item });
   }
   getDLIX() {
      return this.state.DLIX;
   }

   setCFI1(item: any) {
      this.setState({ ...this.state, CFI1: item });
   }
   getCFI1() {
      return this.state.CFI1;
   }


   setPANM(item: any) {
      this.setState({ ...this.state, PANM: item });
   }
   getPANM() {
      return this.state.PANM;
   }



   setFUDS(item: any) {
      this.setState({ ...this.state, FUDS: item });
   }
   getFUDS() {
      return this.state.FUDS;
   }
   setWHLO(item: any) {
      this.setState({ ...this.state, WHLO: item });
   }
   getWHLO() {
      return this.state.WHLO;
   }
   setWHSL(item: any) {
      this.setState({ ...this.state, WHSL: item });
   }
   getWHSL() {
      return this.state.WHSL;
   }
   setBANO(item: any) {
      this.setState({ ...this.state, BANO: item });
   }
   getBANO() {
      return this.state.BANO;
   }
   setATNR(item: any) {
      this.setState({ ...this.state, ATNR: item });
   }
   getATNR() {
      return this.state.ATNR;
   }
   setPRDT(item: any) {
      this.setState({ ...this.state, PRDT: item });
   }
   getPRDT() {
      return this.state.PRDT;
   }
}
