import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {schema: 'public', table: 'mae_cuo'},
  }
})
export class OwnPaymentSchedule extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  cod_cre: string;

  @property({
    type: 'string',
    required: true,
  })
  fec_ven: string;

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

  @property({
    type: 'string',
    required: true,
  })
  fec_can: string;

  @property({
    type: 'string',
    required: true,
  })
  fec_can_cuo: string;

  constructor(data?: Partial<OwnPaymentSchedule>) {
    super(data);
  }
}

export interface OwnPaymentScheduleRelations {
  // describe navigational properties here
}

export type OwnPaymentScheduleWithRelations = OwnPaymentSchedule & OwnPaymentScheduleRelations;
