import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CrearDbDataSource} from '../datasources';
import {CreditInformation, CreditInformationRelations} from '../models';

export class CreditInformationRepository extends DefaultCrudRepository<
  CreditInformation,
  typeof CreditInformation.prototype.cod_cre,
  CreditInformationRelations
> {
  constructor(
    @inject('datasources.crear_db') dataSource: CrearDbDataSource,
  ) {
    super(CreditInformation, dataSource);
  }
}
