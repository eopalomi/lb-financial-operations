import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CrearDbDataSource} from '../datasources';
import {PaymentProcess, PaymentProcessRelations} from '../models';

export class PaymentProcessRepository extends DefaultCrudRepository<
  PaymentProcess,
  typeof PaymentProcess.prototype.id_pagcre,
  PaymentProcessRelations
> {
  constructor(
    @inject('datasources.crear_db') dataSource: CrearDbDataSource,
  ) {
    super(PaymentProcess, dataSource);
  }
}
