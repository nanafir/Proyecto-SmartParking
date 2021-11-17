export interface IParametrosTO{
    tipo_carro: Number;
    tipo_moto: Number;
    tipo_bicicleta: Number;
    tpm_carro: Number;
    tpm_moto: Number;
    tpm_bicicleta: Number
}

export class ParametrosTO implements IParametrosTO {
  public tipo_carro: Number = 0;
  public tipo_moto: Number = 0;
  public tipo_bicicleta: Number = 0;
  public tpm_carro: Number = 0;
  public tpm_moto: Number = 0;
  public tpm_bicicleta: Number = 0;
}
