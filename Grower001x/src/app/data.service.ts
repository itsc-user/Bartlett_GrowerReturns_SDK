import { Injectable } from '@angular/core';

import {
  IMIRequest,
  IMIResponse,
  MIRecord,
  ArrayUtil,
  CoreBase,
  IUserContext,
  IIonApiResponse,
} from '@infor-up/m3-odin';
import {
  MIService,
  UserService,
  ApplicationService,
  IonApiService,
} from '@infor-up/m3-odin-angular';
import { GlobalStore } from '../store/global-store';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  GR0060(atnr, atid, atva) {
    const request = {
      program: 'ATS101MI',
      transaction: 'SetAttrValue',
      maxReturnedRecords: 5000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        ATNR: atnr,
        ATID: atid,
        ATVA: atva,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }


GR0001() {
    const request = {
      program: 'EXT800MI',
      transaction: 'GRPacked',
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
      ],
      maxReturnedRecords: 10000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        SUNO: this.globalStore.getSUNO(), WHLO: this.globalStore.getWHLO(), TRDF: this.globalStore.getfrom(), TRDT: this.globalStore.getto()
    //    F2FGTP: '20',
    //    F2SUNO: suno,
    //    F_WHLO: whlo,
   //     T_WHLO: whlo,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }



  GR0089(suno, cycl, itno, atva, agnb) {
    const request = {
      program: 'EXT100MI',
      transaction: 'GetGrowerPrices',
      maxReturnedRecords: 5000,
      outputFields: [
        'SUNO',
        'FAST',
        'AGNB',
        'PERC',
        'CPRI',
        'CFI3',
        'FPRI',
        'AGQT',
      ],
      includeMetadata: true,
      typedOutput: false,
      record: {
        SUNO: suno,
        CYCL: cycl,
        ITNO: itno,
        VARI: atva,
        AGNB: agnb
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  oPACT: any;
  oD1QT: string;
  items: any;

  packlines: any[] = [];
  obench: any;
  outv: any;

  constructor(
    private miService: MIService,
    protected ionApiService: IonApiService,
    private globalStore: GlobalStore,
    private userService: UserService
  ) {}

  EXT800MI_CrtScalesEntry(panr, grwe) {
    const request = {
      program: 'EXT800MI',
      transaction: 'CrtScalesEntry',
      outputFields: ['STAT'],
      maxReturnedRecords: 500,
      includeMetadata: true,
      typedOutput: false,
      record: {
        PANR: panr,
        GRWE: grwe,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  GR001(suno, whlo) {
    const request = {
      program: 'CMS100MI',
      transaction: 'Lst_GR_RECL',
      outputFields: [
        'F2DIVI',
        'F2FGTP',
        'F2SUNO',
        'F2SUDO',
        'F2PUNO',
        'F2PNLI',
        'F2PNLS',
        'IDCFI3',
        'F2FACI',
        'F2REPN',
        'F2RELP',
        'MTTRTP',
        'LMATNR',
        'F2ITNO',
        'MMITDS',
        'MMITGR',
        'F2BLSB',
        'F2TRDT',
        'F2BANO',
        'A1ATVA',
        'MMCFI4',
        'A2ATVA',
        'MLSTQT',
        'A3ATVA',
        'A4ATVA',
        'A5ATVA',
        'A6ATVA',
        'A7ATVN',
        'A8ATVN',
        'F2RPQA',
        'F2SCOC',
      ],
      maxReturnedRecords: 10000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        F2DIVI: 'ABA',
        T_FGTP: '90',
        F2SUNO: suno,
        F_RPQA: '1',
        F_WHLO: whlo,
        T_WHLO: whlo,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  GR001y(suno, bano) {
    const request = {
      program: 'CMS100MI',
      transaction: 'Lst_GR_RECL2',
      outputFields: [
        'F2DIVI',
        'F2FGTP',
        'F2SUNO',
        'F2SUDO',
        'F2PUNO',
        'F2PNLI',
        'F2PNLS',
        'IDCFI3',
        'F2FACI',
        'F2REPN',
        'F2RELP',
        'MTTRTP',
        'LMATNR',
        'F2ITNO',
        'MMITDS',
        'MMITGR',
        'F2BLSB',
        'F2TRDT',
        'F2BANO',
        'A1ATVA',
        'MMCFI4',
        'A2ATVA',
        'MLSTQT',
        'A3ATVA',
        'A4ATVA',
        'A5ATVA',
        'A6ATVA',
        'A7ATVN',
        'A8ATVN',
        'F2RPQA',
        'F2SCOC',
      ],
      maxReturnedRecords: 10000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        F2SUNO: suno,
        F_BANO: bano,
        T_BANO: bano,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  GR001X(suno) {
    const request = {
      program: 'CMS100MI',
      transaction: 'Lst_GR_RECL',
      outputFields: [
        'F2DIVI',
        'F2FGTP',
        'F2SUNO',
        'F2SUDO',
        'F2PUNO',
        'F2PNLI',
        'F2PNLS',
        'IDCFI3',
        'F2FACI',
        'F2REPN',
        'F2RELP',
        'MTTRTP',
        'LMATNR',
        'F2ITNO',
        'MMITDS',
        'MMITGR',
        'F2TRDT',
        'F2BANO',
        'A1ATVA',
        'MMCFI4',
        'A2ATVA',
        'MLSTQT',
        'A3ATVA',
        'A4ATVA',
        'A5ATVA',
        'A6ATVA',
        'A7ATVN',
        'A8ATVN',
        'F2RPQA',
        'F2SCOC',
      ],
      maxReturnedRecords: 10000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        F2DIVI: 'ABA',
        F_FGTP: '80',
        T_FGTP: '80',
        F2SUNO: suno,
        F_RPQA: '1',
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  GR001Y(puno, pnli) {
    const request = {
      program: 'CMS100MI',
      transaction: 'Lst_GR_APS450',
      outputFields: ['E5SINO', 'F2BANO'],
      maxReturnedRecords: 1000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        F2DIVI: 'ABA',
        F2PUNO: puno,
        F1PNLI: pnli,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  getAttributeValue(itno, bano, atid) {
    const request = {
      program: 'CMS100MI',
      transaction: 'Lst_GR_ATIDY',
      outputFields: ['AGATVN'],
      maxReturnedRecords: 1000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        AGITNO: itno,
        AGBANO: bano,
        AGATID: atid,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  GR001A(itno) {
    const request = {
      program: 'CMS100MI',
      transaction: 'Lst_GR_Stock',
      outputFields: ['MBAVAL'],
      maxReturnedRecords: 5000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        F_ITNO: itno,
        T_ITNO: itno,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  GR001B(puno, pnli) {
    const request = {
      program: 'CMS100MI',
      transaction: 'Lst_GR_MPLINE',
      outputFields: ['IBPUPR', 'IBAGNB', 'IBOURR', 'IDCFI3', 'IBUDN1'],
      maxReturnedRecords: 5000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        IBPUNO: puno,
        IBPNLI: pnli,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  GR_PRICE01(suno, obv1, obv2) {
    const request = {
      program: 'CMS100MI',
      transaction: 'Lst_GRAgreement',
      outputFields: [
        'AJAGNB',
        'AJSUNO',
        'AJOBJ1',
        'AJOBV2',
        'AJFVDT',
        'AJPUPR',
        'AIUVDT',
      ],
      maxReturnedRecords: 5000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        AJSUNO: suno,
        AJGRPI: '30',
        F_OBV1: obv1,
        T_OBV1: obv1,
        F_OBV2: obv2,
        T_OBV2: obv2,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  GR_PRICE01A(suno, obv1) {
    const request = {
      program: 'CMS100MI',
      transaction: 'Lst_GRAgreement',
      outputFields: [
        'AJAGNB',
        'AJSUNO',
        'AJOBJ1',
        'AJOBV2',
        'AJFVDT',
        'AJPUPR',
        'AIUVDT',
      ],
      maxReturnedRecords: 5000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        AJSUNO: suno,
        AJGRPI: '30',
        F_OBV1: obv1,
        T_OBV1: obv1,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  GR002(bano) {
    const request = {
      program: 'CMS100MI',
      transaction: 'Lst_GR_MITTRA',
      outputFields: [
        'MTTRQT',
        'VHREND',
        'MTRIDN',
        'VHMFNO',
        'VHORTY',
        'MTTRTP',
        'VHPCDO',
      ],
      maxReturnedRecords: 5000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        F_BANO: bano,
        T_BANO: bano,
        F_TTYP: '11',
        T_TTYP: '11',
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  GR0041(bano) {
    const request = {
      program: 'CMS100MI',
      transaction: 'Lst_GR_MITTRA',
      outputFields: ['MTTRQT', 'VHREND', 'MTRIDN', 'VHMFNO', 'VHORTY'],
      maxReturnedRecords: 5000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        F_BANO: bano,
        T_BANO: bano,
        F_TTYP: '31',
        T_TTYP: '31',
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  GR0042(mfno) {
    const request = {
      program: 'CMS100MI',
      transaction: 'Lst_GR_EndProd',
      outputFields: ['VHFACI', 'VHBANO', 'VHPRNO', 'VHMFNO', 'VHRVQA'],
      maxReturnedRecords: 5000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        F_MFHL: mfno,
        T_MFHL: mfno,
        F_BANO: '1',
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  GR003(mfno) {
    const request = {
      program: 'CMS100MI',
      transaction: 'Lst_GR_MITTRA2',
      outputFields: ['MTTRQT', 'VHREND', 'MTRIDN', 'MTTTYP', 'MTITNO'],
      maxReturnedRecords: 5000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        MTRIDN: mfno,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }


  GR003A(faci, mfhl) {
    const request = {
      program: 'CMS100MI',
      transaction: 'Lst_GREND',
      outputFields: ['VHMFNO'],
      maxReturnedRecords: 5000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        VHFACI: faci,
        VHMFHL: mfhl,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }



  GR004(itno, bano) {
    const request = {
      program: 'CMS100MI',
      transaction: 'Lst_GR_ATID',
      outputFields: [
        'AGITNO',
        'AGBANO',
        'AGATVA',
        'AGATVN',
        'AGATID',
        'AGATNR',
      ],
      maxReturnedRecords: 5000,
      includeMetadata: true,
      typedOutput: false,
      record: {
        AGITNO: itno,
        AGBANO: bano,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  MWS070MI_BANO(bano) {
    const request = {
      program: 'CMS100MI',
      transaction: 'Lst_GR_MITTRA',
      outputFields: ['MTTRQT', 'VHREND', 'VHORTY'],
      maxReturnedRecords: 1,
      includeMetadata: true,
      typedOutput: false,
      record: {
        F_BANO: bano,
        T_BANO: bano,
        F_TTYP: '11',
        T_TTYP: '11',
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  CRS050MI(unms) {
    const request = {
      program: 'CRS050MI',
      transaction: 'Get',
      outputFields: ['UNIT'],
      maxReturnedRecords: 500,
      includeMetadata: true,
      typedOutput: false,
      record: {
        UNIT: unms,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  CRS175MI_DIGI(digi) {
    const request = {
      program: 'CRS175MI',
      transaction: 'GetGeneralCode',
      outputFields: ['TX15'],
      maxReturnedRecords: 500,
      includeMetadata: true,
      typedOutput: false,
      record: {
        STKY: digi,
        STCO: 'DIGI',
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  CRS175MI_CFI3(cfi3) {
    const request = {
      program: 'CRS175MI',
      transaction: 'GetGeneralCode',
      outputFields: ['TX15'],
      maxReturnedRecords: 500,
      includeMetadata: true,
      typedOutput: false,
      record: {
        STKY: cfi3,
        STCO: 'CFI3',
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  CRS175MI_CFI4(cfi4) {
    const request = {
      program: 'CRS175MI',
      transaction: 'GetGeneralCode',
      outputFields: ['TX15'],
      maxReturnedRecords: 500,
      includeMetadata: true,
      typedOutput: false,
      record: {
        STKY: cfi4,
        STCO: 'CFI4',
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  CRS175MI_ITGR(itgr) {
    const request = {
      program: 'CRS175MI',
      transaction: 'GetGeneralCode',
      outputFields: ['TX15'],
      maxReturnedRecords: 500,
      includeMetadata: true,
      typedOutput: false,
      record: {
        STKY: itgr,
        STCO: 'ITGR',
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  CRS175MI_ITCL(itcl) {
    const request = {
      program: 'CRS175MI',
      transaction: 'GetGeneralCode',
      outputFields: ['TX15'],
      maxReturnedRecords: 500,
      includeMetadata: true,
      typedOutput: false,
      record: {
        STKY: itcl,
        STCO: 'ITCL',
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  CRS175MI_PRGP(prgp) {
    const request = {
      program: 'CRS175MI',
      transaction: 'GetGeneralCode',
      outputFields: ['TX15'],
      maxReturnedRecords: 500,
      includeMetadata: true,
      typedOutput: false,
      record: {
        STKY: prgp,
        STCO: 'PRGP',
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  CRS175MI_CFI1(cfi1) {
    const request = {
      program: 'CRS175MI',
      transaction: 'GetGeneralCode',
      outputFields: ['TX15'],
      maxReturnedRecords: 500,
      includeMetadata: true,
      typedOutput: false,
      record: {
        STKY: cfi1,
        STCO: 'CFI1',
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  CRS620MI_SUNO(suno) {
    const request = {
      program: 'CRS620MI',
      transaction: 'GetBasicData',
      outputFields: ['SUNO'],
      maxReturnedRecords: 500,
      includeMetadata: true,
      typedOutput: false,
      record: {
        SUNO: suno,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  CRS045MI_ORCO(cscd) {
    const request = {
      program: 'CRS045MI',
      transaction: 'GetBasicData',
      outputFields: ['CSCD'],
      maxReturnedRecords: 500,
      includeMetadata: true,
      typedOutput: false,
      record: {
        CSCD: cscd,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  PPS095MI_ORTY(orty) {
    const request = {
      program: 'PPS095MI',
      transaction: 'GetOrderType',
      outputFields: ['ORTY'],
      maxReturnedRecords: 500,
      includeMetadata: true,
      typedOutput: false,
      record: {
        ORTY: orty,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  MMS001(itno, itds, fuds) {
    const request = {
      program: 'MMS200MI',
      transaction: 'CpyItmViaItmTyp',
      outputFields: ['ITNO'],
      maxReturnedRecords: 500,
      includeMetadata: true,
      typedOutput: false,
      record: {
        ITNO: itno,
        ITDS: itds,
        FUDS: fuds,
        CITN: this.globalStore.getTMPL(),
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  MMS001U(itno, itds, fuds, digi, itgr, stat) {
    const request = {
      program: 'MMS200MI',
      transaction: 'UpdItmBasic',
      outputFields: ['ITNO'],
      maxReturnedRecords: 500,
      includeMetadata: true,
      typedOutput: false,
      record: {
        ITNO: itno,
        ITDS: itds,
        FUDS: fuds,
        DIGI: digi,
        ITGR: itgr,
        STAT: stat,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  MMS001V(itno, digi) {
    const request = {
      program: 'MMS200MI',
      transaction: 'UpdItmPrice',
      outputFields: ['ITNO'],
      maxReturnedRecords: 500,
      includeMetadata: true,
      typedOutput: false,
      record: {
        ITNO: itno,
        DIGI: digi,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  CRS175MI_ITNO(itno) {
    const request = {
      program: 'MMS200MI',
      transaction: 'GetItmBasic',
      outputFields: ['ITNO'],
      maxReturnedRecords: 1,
      includeMetadata: true,
      typedOutput: false,
      record: {
        ITNO: itno,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }

  CRS620(suno) {
    const request = {
      program: 'CRS620MI',
      transaction: 'GetBasicData',
      outputFields: ['SUNO'],
      maxReturnedRecords: 1,
      includeMetadata: true,
      typedOutput: false,
      record: {
        SUNO: suno,
      },
    };
    console.log(request);
    return this.miService.execute(request);
  }
}
