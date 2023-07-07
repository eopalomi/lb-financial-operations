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
import {OwnPaymentSchedule} from '../models';
import {OwnPaymentScheduleRepository} from '../repositories';

export class OwnPaymentScheduleController {
  constructor(
    @repository(OwnPaymentScheduleRepository)
    public ownPaymentScheduleRepository : OwnPaymentScheduleRepository,
  ) {}

  @post('/own-payment-schedules')
  @response(200, {
    description: 'OwnPaymentSchedule model instance',
    content: {'application/json': {schema: getModelSchemaRef(OwnPaymentSchedule)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OwnPaymentSchedule, {
            title: 'NewOwnPaymentSchedule',
            
          }),
        },
      },
    })
    ownPaymentSchedule: OwnPaymentSchedule,
  ): Promise<OwnPaymentSchedule> {
    return this.ownPaymentScheduleRepository.create(ownPaymentSchedule);
  }

  @get('/own-payment-schedules/count')
  @response(200, {
    description: 'OwnPaymentSchedule model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(OwnPaymentSchedule) where?: Where<OwnPaymentSchedule>,
  ): Promise<Count> {
    return this.ownPaymentScheduleRepository.count(where);
  }

  @get('/own-payment-schedules')
  @response(200, {
    description: 'Array of OwnPaymentSchedule model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(OwnPaymentSchedule, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(OwnPaymentSchedule) filter?: Filter<OwnPaymentSchedule>,
  ): Promise<OwnPaymentSchedule[]> {
    return this.ownPaymentScheduleRepository.find(filter);
  }

  @patch('/own-payment-schedules')
  @response(200, {
    description: 'OwnPaymentSchedule PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OwnPaymentSchedule, {partial: true}),
        },
      },
    })
    ownPaymentSchedule: OwnPaymentSchedule,
    @param.where(OwnPaymentSchedule) where?: Where<OwnPaymentSchedule>,
  ): Promise<Count> {
    return this.ownPaymentScheduleRepository.updateAll(ownPaymentSchedule, where);
  }

  @get('/own-payment-schedules/{id}')
  @response(200, {
    description: 'OwnPaymentSchedule model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(OwnPaymentSchedule, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(OwnPaymentSchedule, {exclude: 'where'}) filter?: FilterExcludingWhere<OwnPaymentSchedule>
  ): Promise<OwnPaymentSchedule> {
    return this.ownPaymentScheduleRepository.findById(id, filter);
  }

  @patch('/own-payment-schedules/{id}')
  @response(204, {
    description: 'OwnPaymentSchedule PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OwnPaymentSchedule, {partial: true}),
        },
      },
    })
    ownPaymentSchedule: OwnPaymentSchedule,
  ): Promise<void> {
    await this.ownPaymentScheduleRepository.updateById(id, ownPaymentSchedule);
  }

  @put('/own-payment-schedules/{id}')
  @response(204, {
    description: 'OwnPaymentSchedule PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() ownPaymentSchedule: OwnPaymentSchedule,
  ): Promise<void> {
    await this.ownPaymentScheduleRepository.replaceById(id, ownPaymentSchedule);
  }

  @del('/own-payment-schedules/{id}')
  @response(204, {
    description: 'OwnPaymentSchedule DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ownPaymentScheduleRepository.deleteById(id);
  }
}
