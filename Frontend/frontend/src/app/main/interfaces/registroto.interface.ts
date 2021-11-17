export interface IRegistroTO{
  placa_vehiculo: String;
  plaza: String;
  hora_ingreso: String;
  hora_salida: String;
  imagen_vehiculo: String;
  tipo_vehiculo: String;
  total_pagar: String;
}

export class RegistroTO implements IRegistroTO {
  placa_vehiculo = "";
  plaza = "";
  hora_ingreso = "";
  hora_salida = "";
  imagen_vehiculo = "";
  tipo_vehiculo = "";
  total_pagar = ""
}
