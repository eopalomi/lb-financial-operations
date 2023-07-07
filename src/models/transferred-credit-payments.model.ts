import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {schema: 'public', table: 'pag_cuo_ven'},
  }
})
export class TransferredCreditPayments extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
    postgresql: {
      columnName: 'cod_cre',
      dataType: 'varchar',
      nullable: 'NO',
    },
  })
  cod_cre: string;

  @property({
    type: 'number',
    id: true,
    required: true,
    postgresql: {
      columnName: 'num_cuo',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  num_cuo: number;

  @property({
    type: 'string',
    id: true,
    required: true,
    postgresql: {
      columnName: 'lug_rec',
      dataType: 'varchar',
      nullable: 'NO',
    },
  })
  lug_rec: string;

  @property({
    type: 'string',
    id: true,
    required: true,
    postgresql: {
      columnName: 'num_ric',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  num_ric: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'cod_int',
      dataType: 'varchar',
      nullable: 'NO',
    },
  })
  cod_int: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {
      columnName: 'fec_pag',
      dataType: 'string',
      nullable: 'NO',
    },
  })
  fec_pag: Date;

  @property({
    type: 'date',
    required: true,
    postgresql: {
      columnName: 'hor_pag',
      dataType: 'date',
      nullable: 'NO',
    },
  })
  hor_pag: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {
      columnName: 'fec_doc',
      dataType: 'string',
      nullable: 'NO',
    },
  })
  fec_doc: Date;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'pago',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  pago: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'pag_cap',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  pag_cap: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'pag_int',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  pag_int: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'pag_seg',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  pag_seg: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'pag_seg_desgra',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  pag_seg_desgra: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'pag_mor',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  pag_mor: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'pag_mor_mor',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  pag_mor_mor: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'pag_mor_com',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  pag_mor_com: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'pag_itf',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  pag_itf: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'pag_igv',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  pag_igv: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'dia_int',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  dia_int: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'dia_mor',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  dia_mor: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'cod_ubi',
      dataType: 'varchar',
      nullable: 'NO',
    },
  })
  cod_ubi: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'tip_ope',
      dataType: 'varchar',
      nullable: 'NO',
    },
  })
  tip_ope: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {
      columnName: 'ult_pag',
      dataType: 'date',
      nullable: 'NO',
    },
  })
  ult_pag: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'cod_oei',
      dataType: 'date',
      nullable: 'NO',
    },
  })
  cod_oei: string;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'enc_cap',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  enc_cap: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'enc_int',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  enc_int: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'enc_mor',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  enc_mor: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'enc_mor_mor',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  enc_mor_mor: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'enc_mor_com',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  enc_mor_com: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'enc_seg',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  enc_seg: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'enc_seg_desgra',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  enc_seg_desgra: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'cal_cap',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  cal_cap: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'cal_int',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  cal_int: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'cal_rea',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  cal_rea: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'cal_mor',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  cal_mor: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'cal_imo',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  cal_imo: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'cal_gas',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  cal_gas: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'cap_por',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  cap_por: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'int_por',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  int_por: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'cap_ven',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  cap_ven: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'int_ven',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: 'NO',
    },
  })
  int_ven: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'hor_rec',
      dataType: 'varchar',
      nullable: true,
    },
  })
  hor_rec: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'vou_eess',
      dataType: 'varchar',
      nullable: true,
    },
  })
  vou_eess: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'bru_eess',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
  })
  bru_eess: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'itf_ent',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
  })
  itf_ent: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'itf_sal',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
  })
  itf_sal: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'rec_net',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
  })
  rec_net: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'com_cof',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
  })
  com_cof: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'net_tot',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
  })
  net_tot: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'cod_eess',
      dataType: 'varchar',
      nullable: true,
    },
  })
  cod_eess: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'nom_eess',
      dataType: 'varchar',
      nullable: true,
    },
  })
  nom_eess: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'swt_tip_pag',
      dataType: 'varchar',
      nullable: true,
    },
  })
  swt_tip_pag: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'fec_reg',
      dataType: 'varchar',
      nullable: true,
    },
  })
  fec_reg: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'hor_reg',
      dataType: 'varchar',
      nullable: true,
    },
  })
  hor_reg: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'usu_reg',
      dataType: 'varchar',
      nullable: true,
    },
  })
  usu_reg: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'fec_reg_pag',
      dataType: 'date',
      nullable: true,
    },
  })
  fec_reg_pag: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'fec_pag_rea',
      dataType: 'date',
      nullable: true,
    },
  })
  fec_pag_rea: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'tip_pagcuo',
      dataType: 'varchar',
      nullable: true,
    },
  })
  tip_pagcuo: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'swt_ser',
      dataType: 'varchar',
      nullable: true,
    },
  })
  swt_ser: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'can_ant',
      dataType: 'varchar',
      nullable: true,
    },
  })
  can_ant: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'swt_can',
      dataType: 'varchar',
      nullable: true,
    },
  })
  swt_can: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'emp_tra',
      dataType: 'varchar',
      nullable: true,
    },
  })
  emp_tra: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'emp_ven',
      dataType: 'varchar',
      nullable: true,
    },
  })
  emp_ven: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'fue_fin_pag',
      dataType: 'varchar',
      nullable: true,
    },
  })
  fue_fin_pag: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'mod_rea_pag',
      dataType: 'varchar',
      nullable: true,
    },
  })
  mod_rea_pag: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'tip_amo_rop',
      dataType: 'varchar',
      nullable: true,
    },
  })
  tip_amo_rop: string;

  @property({
    type: 'Date',
    required: true,
    postgresql: {
      columnName: 'fec_ven_pag',
      dataType: 'date',
      nullable: true,
    },
  })
  fec_ven_pag: Date;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'swt_mig_pag_ven',
      dataType: 'varchar',
      nullable: true,
    },
  })
  swt_mig_pag_ven: string;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'dia_int_ec',
      dataType: 'integer',
      nullable: true,
    },
  })
  dia_int_ec: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'tip_cam',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
  })
  tip_cam: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'mor_enc',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
  })
  mor_enc: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'cue_ban',
      dataType: 'varchar',
      nullable: true,
    },
  })
  cue_ban: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'ori_tip_cam',
      dataType: 'varchar',
      nullable: true,
    },
  })
  ori_tip_cam: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'swt_pag_ban',
      dataType: 'varchar',
      nullable: true,
    },
  })
  swt_pag_ban: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'num_vou_ban',
      dataType: 'varchar',
      nullable: true,
    },
  })
  num_vou_ban: string;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'id_pagcre',
      dataType: 'integer',
      nullable: true,
    },
  })
  id_pagcre: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'co_dispag',
      dataType: 'integer',
      nullable: true,
    },
  })
  co_dispag: number;

  @property({
    type: 'Date',
    required: true,
    postgresql: {
      columnName: 'fe_propre',
      dataType: 'date',
      nullable: true,
    },
  })
  fe_propre: Date;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'pag_bol_int',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
  })
  pag_bol_int: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'pag_seg_prev',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
  })
  pag_seg_prev: number;

  constructor(data?: Partial<TransferredCreditPayments>) {
    super(data);
  }
}

export interface TransferredCreditPaymentsRelations {
  // describe navigational properties here
}

export type TransferredCreditPaymentsWithRelations = TransferredCreditPayments & TransferredCreditPaymentsRelations;
