import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
  response
} from '@loopback/rest';
import {ReceiptNumber} from '../models';
import {ReceiptNumberRepository} from '../repositories';

export class ReceiptController {
  constructor(
    @repository(ReceiptNumberRepository)
    public receiptNumberRepository: ReceiptNumberRepository,
  ) { }

  @get('/receipt-number/{lugrec}/{carter}')
  @response(200, {
    description: 'ReceiptNumber model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ReceiptNumber, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.path.string('lugrec') lugrec: string,
    @param.path.number('carter') carter: number
  ): Promise<ReceiptNumber> {

    const response = await this.receiptNumberRepository.execute(`select prelac.f_nu_reccaj('001'::varchar, 'C'::varchar, '${lugrec}', ${carter})`);

    const receiptNumber = new ReceiptNumber();

    receiptNumber.idReceipt = parseInt(response[0].f_nu_reccaj);

    return receiptNumber;
  }





}
