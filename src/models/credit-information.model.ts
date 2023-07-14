import {Entity, model, property} from '@loopback/repository';

@model()
export class CreditInformation extends Entity {
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
  emp_ven: string;

  @property({
    type: 'string',
    required: true,
  })
  emp_tra: string;

  @property({
    type: 'string',
    required: true,
  })
  ult_pag: string;

  @property({
    type: 'string',
    required: true,
  })
  fue_fin: string;

  @property({
    type: 'string',
    required: true,
  })
  ide_coo: string;

  @property({
    type: 'string',
    required: true,
  })
  cod_exp: string;

  @property({
    type: 'string',
    required: true,
  })
  cod_int: string;


  constructor(data?: Partial<CreditInformation>) {
    super(data);
  }
}

export interface CreditInformationRelations {
  // describe navigational properties here
}

export type CreditInformationWithRelations = CreditInformation & CreditInformationRelations;
