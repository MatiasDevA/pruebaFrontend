import { AceiteI } from "./Aceite";
import { AlineacionI } from "./alineacion";
import { LavadoI } from "./lavado";


export interface ClienteI{
    id?: string,
    nombre: string,
    vehiculo: string,
   precio:number,
    fecha:string,
    lavado: LavadoI,
    alineacion: AlineacionI,
    aceite: AceiteI
}