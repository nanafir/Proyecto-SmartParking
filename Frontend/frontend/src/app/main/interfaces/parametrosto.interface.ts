export interface IParametrosTO{
    tipo_carro: Int;
    tipo_moto: Int;
    tipo_bicicleta: Int;
    tpm_carro: Int;
    tpm_moto: Int;
    tpm_bicicleta: Int
}

export class ParametrosTO implements IParametrosTO {
  public tipo_carro: Int = 0;
  public tipo_moto: Int = 0;
  public tipo_bicicleta: Int = 0;
  public tpm_carro: Int = 0;
  public tpm_moto: Int = 0;
  public tpm_bicicleta: Int = 0;
}
