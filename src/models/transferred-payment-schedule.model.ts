import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {schema: 'public', table: 'mae_cuo_ven'},
  },
})
export class TransferredPaymentSchedule extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  cod_cre: string;

  @property({
    type: 'number',
    required: true,
  })
  num_cuo: number;

  @property({
    type: 'number',
    required: true,
  })
  capital: number;

  @property({
    type: 'number',
    required: true,
  })
  interes: number;

  @property({
    type: 'number',
    required: true,
  })
  cta_seg: number;

  @property({
    type: 'number',
    required: true,
  })
  cta_seg_desgra: number;

  @property({
    type: 'number',
    required: true,
  })
  cta_igv: number;

  @property({
    type: 'number',
    required: true,
  })
  cta_seg_prev: number;

  @property({
    type: 'number',
    required: true,
  })
  sal_cap: number;

  @property({
    type: 'number',
    required: true,
  })
  sal_int: number;

  @property({
    type: 'number',
    required: true,
  })
  sal_mor: number;

  @property({
    type: 'number',
    required: true,
  })
  sal_seg: number;

  @property({
    type: 'number',
    required: true,
  })
  sal_seg_desgra: number;

  @property({
    type: 'number',
    required: true,
  })
  sal_seg_prev: number;

  @property({
    type: 'number',
    required: true,
  })
  sal_igv: number;

  constructor(data?: Partial<TransferredPaymentSchedule>) {
    super(data);
  }
}

export interface TransferredPaymentScheduleRelations {
  // describe navigational properties here
}

export type TransferredPaymentScheduleWithRelations = TransferredPaymentSchedule & TransferredPaymentScheduleRelations;
