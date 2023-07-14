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
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {TransferredPaymentSchedule} from '../models';
import {TransferredPaymentScheduleRepository} from '../repositories';

export class TransferredPaymentScheduleController {
  constructor(
    @repository(TransferredPaymentScheduleRepository)
    public transferredPaymentScheduleRepository: TransferredPaymentScheduleRepository,
  ) { }

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

  @patch('/transferred-payment-schedules/{creditCode}/{paymentNumber}')
  @response(204, {
    description: 'TransferredPaymentSchedule PATCH success',
  })
  async updateById(
    @param.path.string('creditCode') creditCode: string,
    @param.path.string('paymentNumber') paymentNumber: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TransferredPaymentSchedule, {partial: true}),
        },
      },
    })
    transferredPaymentSchedule: TransferredPaymentSchedule,
  ): Promise<void> {
    // await this.ownPaymentScheduleRepository.updateById(creditCode, ownPaymentSchedule);
    await this.transferredPaymentScheduleRepository.execute(`
        /***** Actualizar Saldos *****/
        update mae_cuo_ven mc set
          sal_cap = ${transferredPaymentSchedule.sal_cap},
          sal_int = ${transferredPaymentSchedule.sal_int},
          sal_seg = ${transferredPaymentSchedule.sal_seg},
          sal_seg_desgra = ${transferredPaymentSchedule.sal_seg_desgra},
          sal_mor = ${transferredPaymentSchedule.sal_mor},
          sal_seg_prev = ${transferredPaymentSchedule.sal_seg_prev},
          fec_can = '${transferredPaymentSchedule.fec_can}',
          fec_can_cuo = '${transferredPaymentSchedule.fec_can_cuo}'
        where cod_cre = '${creditCode}'
        and num_cuo = '${paymentNumber}';
      `)
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
