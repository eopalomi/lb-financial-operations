import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CrearDbDataSource} from '../datasources';
import {TransferredPaymentCanceled, TransferredPaymentCanceledRelations} from '../models';

export class TransferredPaymentCanceledRepository extends DefaultCrudRepository<
  TransferredPaymentCanceled,
  typeof TransferredPaymentCanceled.prototype.codigo,
  TransferredPaymentCanceledRelations
> {
  constructor(
    @inject('datasources.crear_db') dataSource: CrearDbDataSource,
  ) {
    super(TransferredPaymentCanceled, dataSource);
  }
}
