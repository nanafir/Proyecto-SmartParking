export interface IRegistroTO{
  placa_vehiculo: String,
  plaza: String,
  hora_ingreso: String,
  hora_salida: String,
  imagen_vehiculo: String,
  tipo_vehiculo: String,
  total_pagar: String,
}

export class RegistroTO implements IRegistroTO {
  public placa_vehiculo: String = "";
  public plaza: String ="";
  public hora_ingreso: String ="";
  public hora_salida:  String ="";
  public imagen_vehiculo: String ="";
  public tipo_vehiculo: String ="";
  public total_pagar: String ="";
}
