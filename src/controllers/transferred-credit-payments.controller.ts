import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  HttpErrors,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {TransferredCreditPayments} from '../models';
import {TransferredCreditPaymentsRepository} from '../repositories';

export class TransferredCreditPaymentsController {
  constructor(
    @repository(TransferredCreditPaymentsRepository)
    public transferredCreditPaymentsRepository: TransferredCreditPaymentsRepository,
  ) { }

  @post('/transferred-credit-payments')
  @response(200, {
    description: 'TransferredCreditPayments model instance',
    content: {'application/json': {schema: getModelSchemaRef(TransferredCreditPayments)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TransferredCreditPayments, {
            title: 'NewTransferredCreditPayments',

          }),
        },
      },
    })
    transferredCreditPayments: TransferredCreditPayments,
  ): Promise<TransferredCreditPayments> {
    return this.transferredCreditPaymentsRepository.create(transferredCreditPayments);
  }

  @get('/transferred-credit-payments/count')
  @response(200, {
    description: 'TransferredCreditPayments model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TransferredCreditPayments) where?: Where<TransferredCreditPayments>,
  ): Promise<Count> {
    return this.transferredCreditPaymentsRepository.count(where);
  }

  @get('/transferred-credit-payments')
  @response(200, {
    description: 'Array of TransferredCreditPayments model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TransferredCreditPayments, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TransferredCreditPayments) filter?: Filter<TransferredCreditPayments>,
  ): Promise<TransferredCreditPayments[]> {
    return this.transferredCreditPaymentsRepository.find(filter);
  }

  @patch('/transferred-credit-payments')
  @response(200, {
    description: 'TransferredCreditPayments PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TransferredCreditPayments, {partial: true}),
        },
      },
    })
    transferredCreditPayments: TransferredCreditPayments,
    @param.where(TransferredCreditPayments) where?: Where<TransferredCreditPayments>,
  ): Promise<Count> {
    return this.transferredCreditPaymentsRepository.updateAll(transferredCreditPayments, where);
  }

  @get('/transferred-credit-payments/{id}')
  @response(200, {
    description: 'TransferredCreditPayments model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TransferredCreditPayments, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TransferredCreditPayments, {exclude: 'where'}) filter?: FilterExcludingWhere<TransferredCreditPayments>
  ): Promise<TransferredCreditPayments> {
    return this.transferredCreditPaymentsRepository.findById(id, filter);
  }

  @patch('/transferred-credit-payments/{id}')
  @response(204, {
    description: 'TransferredCreditPayments PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TransferredCreditPayments, {partial: true}),
        },
      },
    })
    transferredCreditPayments: TransferredCreditPayments,
  ): Promise<void> {
    await this.transferredCreditPaymentsRepository.updateById(id, transferredCreditPayments);
  }

  @put('/transferred-credit-payments/{id}')
  @response(204, {
    description: 'TransferredCreditPayments PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() transferredCreditPayments: TransferredCreditPayments,
  ): Promise<void> {
    await this.transferredCreditPaymentsRepository.replaceById(id, transferredCreditPayments);
  }

  @del('/transferred-credit-payments/{creditCode}')
  @response(204, {
    description: 'TransferredCreditPayments DELETE success',
  })
  async deleteById(
    @param.path.string('creditCode', {length: 8}) creditCode: string,
    @param.query.string('id_pagcre', {required: true}) id_pagcre: string
  ): Promise<void> {
    console.log(`
    select * from pag_cuo_ven where cod_cre = '${creditCode}' and id_pagcre = ${id_pagcre}
  `)
    const existsPayment = await this.transferredCreditPaymentsRepository.execute(`
      select * from pag_cuo_ven where cod_cre = '${creditCode}' and id_pagcre = ${id_pagcre}
    `)

    if (existsPayment.length === 0) {
      throw new HttpErrors.NotFound("payment not found");
    }

    const paymentsAfter = await this.transferredCreditPaymentsRepository.execute(`
      select count(*) from pag_cuo_ven pc
      where cod_cre = '${creditCode}'
      and fec_reg_pag > (select fec_reg_pag  from pag_cuo_ven where cod_cre = '${creditCode}' and id_pagcre = ${id_pagcre})
    `)

    if (paymentsAfter[0].count > 0) {
      throw new HttpErrors.BadRequest("credit has payments after");
    }

    await this.transferredCreditPaymentsRepository.execute(`
      delete from pag_cuo_ven where cod_cre = '${creditCode}' and id_pagcre = ${id_pagcre}
    `)
  }
}
