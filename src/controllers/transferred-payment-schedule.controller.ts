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
import {TransferredPaymentSchedule} from '../models';
import {TransferredPaymentScheduleRepository} from '../repositories';

export class TransferredPaymentScheduleController {
  constructor(
    @repository(TransferredPaymentScheduleRepository)
    public transferredPaymentScheduleRepository : TransferredPaymentScheduleRepository,
  ) {}

  @post('/transferred-payment-schedules')
  @response(200, {
    description: 'TransferredPaymentSchedule model instance',
    content: {'application/json': {schema: getModelSchemaRef(TransferredPaymentSchedule)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TransferredPaymentSchedule, {
            title: 'NewTransferredPaymentSchedule',
            
          }),
        },
      },
    })
    transferredPaymentSchedule: TransferredPaymentSchedule,
  ): Promise<TransferredPaymentSchedule> {
    return this.transferredPaymentScheduleRepository.create(transferredPaymentSchedule);
  }

  @get('/transferred-payment-schedules/count')
  @response(200, {
    description: 'TransferredPaymentSchedule model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TransferredPaymentSchedule) where?: Where<TransferredPaymentSchedule>,
  ): Promise<Count> {
    return this.transferredPaymentScheduleRepository.count(where);
  }

  @get('/transferred-payment-schedules')
  @response(200, {
    description: 'Array of TransferredPaymentSchedule model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TransferredPaymentSchedule, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TransferredPaymentSchedule) filter?: Filter<TransferredPaymentSchedule>,
  ): Promise<TransferredPaymentSchedule[]> {
    return this.transferredPaymentScheduleRepository.find(filter);
  }

  @patch('/transferred-payment-schedules')
  @response(200, {
    description: 'TransferredPaymentSchedule PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TransferredPaymentSchedule, {partial: true}),
        },
      },
    })
    transferredPaymentSchedule: TransferredPaymentSchedule,
    @param.where(TransferredPaymentSchedule) where?: Where<TransferredPaymentSchedule>,
  ): Promise<Count> {
    return this.transferredPaymentScheduleRepository.updateAll(transferredPaymentSchedule, where);
  }

  @get('/transferred-payment-schedules/{id}')
  @response(200, {
    description: 'TransferredPaymentSchedule model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TransferredPaymentSchedule, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TransferredPaymentSchedule, {exclude: 'where'}) filter?: FilterExcludingWhere<TransferredPaymentSchedule>
  ): Promise<TransferredPaymentSchedule> {
    return this.transferredPaymentScheduleRepository.findById(id, filter);
  }

  @patch('/transferred-payment-schedules/{id}')
  @response(204, {
    description: 'TransferredPaymentSchedule PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TransferredPaymentSchedule, {partial: true}),
        },
      },
    })
    transferredPaymentSchedule: TransferredPaymentSchedule,
  ): Promise<void> {
    await this.transferredPaymentScheduleRepository.updateById(id, transferredPaymentSchedule);
  }

  @put('/transferred-payment-schedules/{id}')
  @response(204, {
    description: 'TransferredPaymentSchedule PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() transferredPaymentSchedule: TransferredPaymentSchedule,
  ): Promise<void> {
    await this.transferredPaymentScheduleRepository.replaceById(id, transferredPaymentSchedule);
  }

  @del('/transferred-payment-schedules/{id}')
  @response(204, {
    description: 'TransferredPaymentSchedule DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.transferredPaymentScheduleRepository.deleteById(id);
  }
}
