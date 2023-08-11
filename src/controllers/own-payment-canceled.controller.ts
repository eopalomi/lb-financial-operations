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
import {OwnPaymentCanceled} from '../models';
import {OwnPaymentCanceledRepository} from '../repositories';

export class OwnPaymentCanceledController {
  constructor(
    @repository(OwnPaymentCanceledRepository)
    public ownPaymentCanceledRepository: OwnPaymentCanceledRepository,
  ) { }

  @post('/own-payment-canceled')
  @response(200, {
    description: 'OwnPaymentCanceled model instance',
    content: {'application/json': {schema: getModelSchemaRef(OwnPaymentCanceled)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OwnPaymentCanceled, {
            title: 'NewOwnPaymentCanceled',

          }),
        },
      },
    })
    ownPaymentCanceled: OwnPaymentCanceled,
  ): Promise<OwnPaymentCanceled> {
    return this.ownPaymentCanceledRepository.create(ownPaymentCanceled);
  }

  @get('/own-payment-canceled')
  @response(200, {
    description: 'Array of OwnPaymentCanceled model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(OwnPaymentCanceled, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(OwnPaymentCanceled) filter?: Filter<OwnPaymentCanceled>,
  ): Promise<OwnPaymentCanceled[]> {
    return this.ownPaymentCanceledRepository.find(filter);
  }

  @patch('/own-payment-canceled')
  @response(200, {
    description: 'OwnPaymentCanceled PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OwnPaymentCanceled, {partial: true}),
        },
      },
    })
    ownPaymentCanceled: OwnPaymentCanceled,
    @param.where(OwnPaymentCanceled) where?: Where<OwnPaymentCanceled>,
  ): Promise<Count> {
    return this.ownPaymentCanceledRepository.updateAll(ownPaymentCanceled, where);
  }

  @get('/own-payment-canceled/{id}')
  @response(200, {
    description: 'OwnPaymentCanceled model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(OwnPaymentCanceled, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(OwnPaymentCanceled, {exclude: 'where'}) filter?: FilterExcludingWhere<OwnPaymentCanceled>
  ): Promise<OwnPaymentCanceled> {
    return this.ownPaymentCanceledRepository.findById(id, filter);
  }

  @patch('/own-payment-canceled/{id}')
  @response(204, {
    description: 'OwnPaymentCanceled PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OwnPaymentCanceled, {partial: true}),
        },
      },
    })
    ownPaymentCanceled: OwnPaymentCanceled,
  ): Promise<void> {
    await this.ownPaymentCanceledRepository.updateById(id, ownPaymentCanceled);
  }

  // @put('/own-payment-canceled/{id}')
  // @response(204, {
  //   description: 'OwnPaymentCanceled PUT success',
  // })
  // async replaceById(
  //   @param.path.number('id') id: number,
  //   @requestBody() ownPaymentCanceled: OwnPaymentCanceled,
  // ): Promise<void> {
  //   await this.ownPaymentCanceledRepository.replaceById(id, ownPaymentCanceled);
  // }

  @del('/own-payment-canceled/{id}')
  @response(204, {
    description: 'OwnPaymentCanceled DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ownPaymentCanceledRepository.deleteById(id);
  }
}
