import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CrearDbDataSource} from '../datasources';
import {OwnPaymentSchedule, OwnPaymentScheduleRelations} from '../models';

export class OwnPaymentScheduleRepository extends DefaultCrudRepository<
  OwnPaymentSchedule,
  typeof OwnPaymentSchedule.prototype.cod_cre,
  OwnPaymentScheduleRelations
> {
  constructor(
    @inject('datasources.crear_db') dataSource: CrearDbDataSource,
  ) {
    super(OwnPaymentSchedule, dataSource);
  }
}
