import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {OwnCreditPayments} from '../models';
import {OwnCreditPaymentsRepository} from '../repositories';

export class OnwCreditPaymentsController {
  constructor(
    @repository(OwnCreditPaymentsRepository)
    public ownCreditPaymentsRepository : OwnCreditPaymentsRepository,
  ) {}

  @post('/own-credit-payments')
  @response(200, {
    description: 'OwnCreditPayments model instance',
    content: {'application/json': {schema: getModelSchemaRef(OwnCreditPayments)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OwnCreditPayments, {
            title: 'NewOwnCreditPayments',
            
          }),
        },
      },
    })
    ownCreditPayments: OwnCreditPayments,
  ): Promise<OwnCreditPayments> {
    return this.ownCreditPaymentsRepository.create(ownCreditPayments);
  }

  @get('/own-credit-payments/count')
  @response(200, {
    description: 'OwnCreditPayments model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(OwnCreditPayments) where?: Where<OwnCreditPayments>,
  ): Promise<Count> {
    return this.ownCreditPaymentsRepository.count(where);
  }

  @get('/own-credit-payments')
  @response(200, {
    description: 'Array of OwnCreditPayments model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(OwnCreditPayments, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(OwnCreditPayments) filter?: Filter<OwnCreditPayments>,
  ): Promise<OwnCreditPayments[]> {
    return this.ownCreditPaymentsRepository.find(filter);
  }

  @patch('/own-credit-payments')
  @response(200, {
    description: 'OwnCreditPayments PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OwnCreditPayments, {partial: true}),
        },
      },
    })
    ownCreditPayments: OwnCreditPayments,
    @param.where(OwnCreditPayments) where?: Where<OwnCreditPayments>,
  ): Promise<Count> {
    return this.ownCreditPaymentsRepository.updateAll(ownCreditPayments, where);
  }

  @get('/own-credit-payments/{id}')
  @response(200, {
    description: 'OwnCreditPayments model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(OwnCreditPayments, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(OwnCreditPayments, {exclude: 'where'}) filter?: FilterExcludingWhere<OwnCreditPayments>
  ): Promise<OwnCreditPayments> {
    return this.ownCreditPaymentsRepository.findById(id, filter);
  }

  @patch('/own-credit-payments/{id}')
  @response(204, {
    description: 'OwnCreditPayments PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OwnCreditPayments, {partial: true}),
        },
      },
    })
    ownCreditPayments: OwnCreditPayments,
  ): Promise<void> {
    await this.ownCreditPaymentsRepository.updateById(id, ownCreditPayments);
  }

  @put('/own-credit-payments/{id}')
  @response(204, {
    description: 'OwnCreditPayments PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() ownCreditPayments: OwnCreditPayments,
  ): Promise<void> {
    await this.ownCreditPaymentsRepository.replaceById(id, ownCreditPayments);
  }

  @del('/own-credit-payments/{id}')
  @response(204, {
    description: 'OwnCreditPayments DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ownCreditPaymentsRepository.deleteById(id);
  }
}
