import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'crear_db',
  connector: 'postgresql',
  url: '',
  host: '192.168.9.250',
  port: 5432,
  user: 'epalomino',
  password: '4cc3s03p4L0M1n0',
  database: 'prueba'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CrearDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'crear_db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.crear_db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
