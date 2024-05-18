import { Injectable } from "@angular/core";
import { Pelicula } from "../../models/pelicula";

import axios from 'axios';
import { DadService } from "../DadServices";


/*** 
 * Indica que se esta usando un servicio
*/
@Injectable()
export class ArticleService extends DadService{


    constructor() {
        super()
    }


    test() {
        return 'test de service peliculas';
    }


    async getArticles() : Promise<any> {
        let headers = this.headers;
        return  await  axios.get(this.base_url+ 'api/articles', { headers });
    }

    



}
