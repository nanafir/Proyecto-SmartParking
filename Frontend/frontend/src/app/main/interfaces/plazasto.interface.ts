export interface IPlazasTO{
  plaza:String;
  estado:Boolean;
}

export class PlazasTO implements IPlazasTO {
  plaza: String = "";
  estado: Boolean = false;
}
