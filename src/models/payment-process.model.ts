import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class PaymentProcess extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id_pagcre: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PaymentProcess>) {
    super(data);
  }
}

export interface PaymentProcessRelations {
  // describe navigational properties here
}

export type PaymentProcessWithRelations = PaymentProcess & PaymentProcessRelations;
