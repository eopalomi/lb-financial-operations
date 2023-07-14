import {Entity, model, property} from '@loopback/repository';

@model()
export class ReceiptNumber extends Entity {

  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idReceipt: number;


  constructor(data?: Partial<ReceiptNumber>) {
    super(data);
  }
}

export interface ReceiptNumberRelations {
  // describe navigational properties here
}

export type ReceiptNumberWithRelations = ReceiptNumber & ReceiptNumberRelations;
