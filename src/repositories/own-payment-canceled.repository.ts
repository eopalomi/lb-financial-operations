import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CrearDbDataSource} from '../datasources';
import {OwnPaymentCanceled, OwnPaymentCanceledRelations} from '../models';

export class OwnPaymentCanceledRepository extends DefaultCrudRepository<
  OwnPaymentCanceled,
  typeof OwnPaymentCanceled.prototype.codigo,
  OwnPaymentCanceledRelations
> {
  constructor(
    @inject('datasources.crear_db') dataSource: CrearDbDataSource,
  ) {
    super(OwnPaymentCanceled, dataSource);
  }
}
