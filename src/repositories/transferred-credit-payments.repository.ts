import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CrearDbDataSource} from '../datasources';
import {TransferredCreditPayments, TransferredCreditPaymentsRelations} from '../models';

export class TransferredCreditPaymentsRepository extends DefaultCrudRepository<
  TransferredCreditPayments,
  typeof TransferredCreditPayments.prototype.cod_cre,
  TransferredCreditPaymentsRelations
> {
  constructor(
    @inject('datasources.crear_db') dataSource: CrearDbDataSource,
  ) {
    super(TransferredCreditPayments, dataSource);
  }
}
