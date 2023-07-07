import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CrearDbDataSource} from '../datasources';
import {OwnCreditPayments, OwnCreditPaymentsRelations} from '../models';

export class OwnCreditPaymentsRepository extends DefaultCrudRepository<
  OwnCreditPayments,
  typeof OwnCreditPayments.prototype.cod_cre,
  OwnCreditPaymentsRelations
> {
  constructor(
    @inject('datasources.crear_db') dataSource: CrearDbDataSource,
  ) {
    super(OwnCreditPayments, dataSource);
  }
}
