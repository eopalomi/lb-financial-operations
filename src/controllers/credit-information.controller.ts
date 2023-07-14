import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
  response
} from '@loopback/rest';
import {CreditInformation} from '../models';
import {CreditInformationRepository} from '../repositories';

export class CreditInformationController {
  constructor(
    @repository(CreditInformationRepository)
    public creditInformationRepository: CreditInformationRepository,
  ) { }


  @get('/credit-information/{cod_cre}')
  @response(200, {
    description: 'Array of CreditInformation model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CreditInformation, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.path.string('cod_cre') cod_cre: string
  ): Promise<CreditInformation> {

    const response = await this.creditInformationRepository.execute(`
       select mc.cod_cre,
              mc.emp_ven,
              mc.emp_tra,
              mc.ult_pag,
              mc.fue_fin,
              mc.ide_coo,
              mc.cod_exp,
              mi.cod_int
          from mae_cre mc
              inner join mae_int mi on mi.num_ide = mc.ide_coo
          where mc.cod_Cre = '${cod_cre}';
    `);

    const creditInformation = new CreditInformation();

    const validateField = (value: any) => {
      return value !== null && value !== undefined ? String(value) : value;
    };

    creditInformation.cod_cre = validateField(response[0].cod_cre);
    creditInformation.cod_int = validateField(response[0].cod_int);
    creditInformation.emp_tra = validateField(response[0].emp_tra);
    creditInformation.emp_ven = validateField(response[0].emp_ven);
    creditInformation.fue_fin = validateField(response[0].fue_fin);

    return creditInformation;
  }

}
