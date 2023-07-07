import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CrearDbDataSource} from '../datasources';
import {TransferredPaymentSchedule, TransferredPaymentScheduleRelations} from '../models';

export class TransferredPaymentScheduleRepository extends DefaultCrudRepository<
  TransferredPaymentSchedule,
  typeof TransferredPaymentSchedule.prototype.cod_cre,
  TransferredPaymentScheduleRelations
> {
  constructor(
    @inject('datasources.crear_db') dataSource: CrearDbDataSource,
  ) {
    super(TransferredPaymentSchedule, dataSource);
  }
}
