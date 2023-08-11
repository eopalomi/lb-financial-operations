import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {schema: 'public', table: 'pag_anu'},
  },
})
export class OwnPaymentCanceled extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
    postgresql: {
      columnName: 'codigo',
      dataType: 'int8',
      nullable: 'NO',
    },
  })
  codigo: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'cod_per_anu',
      dataType: 'varchar',
      nullable: 'NO',
    },
  })
  cod_per_anu: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'fec_anu',
      dataType: 'timestamp',
      nullable: 'NO',
    },
  })
  fec_anu: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'ip_anu',
      dataType: 'varchar',
      nullable: 'NO',
    },
  })
  ip_anu: string;

  @property({
    type: 'string',
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
    required: true,
    postgresql: {
      columnName: 'num_cuo',
      dataType: 'numeric',
      dataPrecision: 3,
      dataScale: 0,
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
    type: 'number',
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
  num_ric: number;

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
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'fec_pag',
      dataType: 'string',
      nullable: 'NO',
    },
  })
  fec_pag: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'hor_pag',
      dataType: 'date',
      nullable: 'NO',
    },
  })
  hor_pag: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'fec_doc',
      dataType: 'string',
      nullable: 'NO',
    },
  })
  fec_doc: string;

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
    required: false,
    postgresql: {
      columnName: 'pag_mor_mor',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  pag_mor_mor: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'pag_mor_com',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
    jsonSchema: {nullable: true}
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
    type: 'string',
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
    required: false,
    postgresql: {
      columnName: 'cod_oei',
      dataType: 'date',
      nullable: true,
    },
    jsonSchema: {nullable: true}
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
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'hor_rec',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true},
  })
  hor_rec: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'vou_eess',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true},
  })
  vou_eess: string;

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'bru_eess',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
    jsonSchema: {nullable: true},
  })
  bru_eess: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'itf_ent',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
    jsonSchema: {nullable: true},
  })
  itf_ent: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'itf_sal',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
    jsonSchema: {nullable: true},
  })
  itf_sal: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'rec_net',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
    jsonSchema: {nullable: true},
  })
  rec_net: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'com_cof',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
    jsonSchema: {nullable: true},
  })
  com_cof: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'net_tot',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
    jsonSchema: {nullable: true},
  })
  net_tot: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'cod_eess',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true},
  })
  cod_eess: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'nom_eess',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true},
  })
  nom_eess: number;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'swt_tip_pag',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  swt_tip_pag: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'fec_reg',
      dataType: 'varchar',
      nullable: true,
    },
  })
  fec_reg: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'hor_reg',
      dataType: 'varchar',
      nullable: true,
    },
  })
  hor_reg: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'usu_reg',
      dataType: 'varchar',
      nullable: true,
    },
  })
  usu_reg: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'fec_reg_pag',
      dataType: 'date',
      nullable: true,
    },
  })
  fec_reg_pag: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'fec_pag_rea',
      dataType: 'date',
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  fec_pag_rea: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'tip_pagcuo',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true},
  })
  tip_pagcuo: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'swt_ser',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  swt_ser: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'can_ant',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true},
  })
  can_ant: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'swt_can',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true},
  })
  swt_can: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'emp_tra',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true},
  })
  emp_tra: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'emp_ven',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true},
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
    required: false,
    postgresql: {
      columnName: 'tip_amo_rop',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  tip_amo_rop: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'fec_ven_pag',
      dataType: 'date',
      nullable: true,
    },
  })
  fec_ven_pag: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'swt_mig_pag_ven',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  swt_mig_pag_ven: string;

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'dia_int_ec',
      dataType: 'integer',
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  dia_int_ec: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'tip_cam',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  tip_cam: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'mor_enc',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  mor_enc: number;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'cue_ban',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true},
  })
  cue_ban?: string | null;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'ori_tip_cam',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  ori_tip_cam: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'swt_pag_ban',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  swt_pag_ban: string | null;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'num_vou_ban',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  num_vou_ban: string | null;

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'id_pagcre',
      dataType: 'integer',
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  id_pagcre: number;

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'co_dispag',
      dataType: 'integer',
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  co_dispag: number;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'fe_propre',
      dataType: 'date',
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  fe_propre: string;

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'pag_bol_int',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 2,
      nullable: true,
    },
    jsonSchema: {nullable: true}
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

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'cod_ds',
      dataType: 'numeric',
      dataPrecision: 10,
      dataScale: 0,
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  cod_ds: number;

  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'usu_aut_con',
      dataType: 'varchar',
      nullable: true,
    },
    jsonSchema: {nullable: true}
  })
  usu_aut_con: string;

  constructor(data?: Partial<OwnPaymentCanceled>) {
    super(data);
  }
}

export interface OwnPaymentCanceledRelations {
  // describe navigational properties here
}

export type OwnPaymentCanceledWithRelations = OwnPaymentCanceled & OwnPaymentCanceledRelations;
