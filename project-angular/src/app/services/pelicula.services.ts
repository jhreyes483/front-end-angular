import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";


/*** 
 * Indica que se esta usando un servicio
*/
@Injectable()
export class PeliculaService {

    test(){
        return 'test de service peliculas';
    }


    getPeliculas(){
        
    }
}
