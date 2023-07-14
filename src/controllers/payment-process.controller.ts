import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  response
} from '@loopback/rest';
import {PaymentProcess} from '../models';
import {PaymentProcessRepository} from '../repositories';

export class PaymentProcessController {
  constructor(
    @repository(PaymentProcessRepository)
    public paymentProcessRepository: PaymentProcessRepository,
  ) { }

  @get('/payment-process')
  @response(200, {
    description: 'Array of PaymentProcess model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PaymentProcess, {includeRelations: true}),
        },
      },
    },
  })
  async find(): Promise<PaymentProcess> {
    const response = await this.paymentProcessRepository.execute(`select nextval('prelac.tbpagcre_id_pagcre_seq'::regclass) id_pagcre `);

    const paymentProcess = new PaymentProcess();
    paymentProcess.id_pagcre = parseInt(response[0].id_pagcre);

    return paymentProcess;
  }
}
