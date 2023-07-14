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
    const creditInfo = await this.creditInformationRepository.execute(`
      select * from cajabo.validar_cartera_credito('{"nu_idecre":"${cod_cre}"}') vc
    `);

    const sqlTable = creditInfo[0].il_admacc === true ? 'mae_cre' : 'mae_cre_ven';

    const response = await this.creditInformationRepository.execute(`
       select mc.cod_cre,
              mc.emp_ven,
              mc.emp_tra,
              mc.ult_pag,
              mc.fue_fin,
              mc.ide_coo,
              mc.cod_exp,
              mi.cod_int,
              vc.il_admacc
          from ${sqlTable} mc
              inner join mae_int mi on mi.num_ide = mc.ide_coo
              left join cajabo.validar_cartera_credito('{"nu_idecre":"${cod_cre}"}') vc on true
          where mc.cod_Cre = '${cod_cre}';
    `);

    console.log("response", response)
    const creditInformation = new CreditInformation();

    const validateField = (value: any) => {
      return value !== null && value !== undefined ? String(value) : value;
    };

    creditInformation.cod_cre = validateField(response[0].cod_cre);
    creditInformation.cod_int = validateField(response[0].cod_int);
    creditInformation.emp_tra = validateField(response[0].emp_tra);
    creditInformation.emp_ven = validateField(response[0].emp_ven);
    creditInformation.fue_fin = validateField(response[0].fue_fin);
    creditInformation.il_admacc = response[0].il_admacc;

    return creditInformation;
  }

}
