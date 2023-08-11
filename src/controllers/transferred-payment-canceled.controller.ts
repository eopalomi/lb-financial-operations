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
  param,
  patch,
  post,
  requestBody,
  response
} from '@loopback/rest';
import {TransferredPaymentCanceled} from '../models';
import {TransferredPaymentCanceledRepository} from '../repositories';

export class TransferredPaymentCanceledController {
  constructor(
    @repository(TransferredPaymentCanceledRepository)
    public transferredPaymentCanceledRepository: TransferredPaymentCanceledRepository,
  ) { }

  @post('/transferred-payment-canceled')
  @response(200, {
    description: 'TransferredPaymentCanceled model instance',
    content: {'application/json': {schema: getModelSchemaRef(TransferredPaymentCanceled)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TransferredPaymentCanceled, {
            title: 'NewTransferredPaymentCanceled',

          }),
        },
      },
    })
    transferredPaymentCanceled: TransferredPaymentCanceled,
  ): Promise<TransferredPaymentCanceled> {
    return this.transferredPaymentCanceledRepository.create(transferredPaymentCanceled);
  }

  @get('/transferred-payment-canceled')
  @response(200, {
    description: 'Array of TransferredPaymentCanceled model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TransferredPaymentCanceled, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TransferredPaymentCanceled) filter?: Filter<TransferredPaymentCanceled>,
  ): Promise<TransferredPaymentCanceled[]> {
    return this.transferredPaymentCanceledRepository.find(filter);
  }

  @patch('/transferred-payment-canceled')
  @response(200, {
    description: 'TransferredPaymentCanceled PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TransferredPaymentCanceled, {partial: true}),
        },
      },
    })
    transferredPaymentCanceled: TransferredPaymentCanceled,
    @param.where(TransferredPaymentCanceled) where?: Where<TransferredPaymentCanceled>,
  ): Promise<Count> {
    return this.transferredPaymentCanceledRepository.updateAll(transferredPaymentCanceled, where);
  }

  @get('/transferred-payment-canceled/{id}')
  @response(200, {
    description: 'TransferredPaymentCanceled model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TransferredPaymentCanceled, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TransferredPaymentCanceled, {exclude: 'where'}) filter?: FilterExcludingWhere<TransferredPaymentCanceled>
  ): Promise<TransferredPaymentCanceled> {
    return this.transferredPaymentCanceledRepository.findById(id, filter);
  }

  @patch('/transferred-payment-canceled/{id}')
  @response(204, {
    description: 'TransferredPaymentCanceled PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TransferredPaymentCanceled, {partial: true}),
        },
      },
    })
    transferredPaymentCanceled: TransferredPaymentCanceled,
  ): Promise<void> {
    await this.transferredPaymentCanceledRepository.updateById(id, transferredPaymentCanceled);
  }

  @del('/transferred-payment-canceled/{id}')
  @response(204, {
    description: 'TransferredPaymentCanceled DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.transferredPaymentCanceledRepository.deleteById(id);
  }
}
