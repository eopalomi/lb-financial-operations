import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CrearDbDataSource} from '../datasources';
import {ReceiptNumber, ReceiptNumberRelations} from '../models';

export class ReceiptNumberRepository extends DefaultCrudRepository<
  ReceiptNumber,
  typeof ReceiptNumber.prototype.idReceipt,
  ReceiptNumberRelations
> {
  constructor(
    @inject('datasources.crear_db') dataSource: CrearDbDataSource,
  ) {
    super(ReceiptNumber, dataSource);
  }
}
