import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman Across the Spiderverse", "https://media.newyorker.com/photos/64889828ef09d4a0e04c759c/16:9/w_1280,c_limit/Bert-Spider-Verse.jpg", 2023),
            new Pelicula("Nimona", "https://blog.frame.io/wp-content/uploads/2023/06/trc-nimona-partners-in-crime-2.jpg", 2023),
            new Pelicula("Pinocho", "https://miradasdecine.es/data/2022/12/pinocho_00.jpg", 2022),
            ];
    }
    holaMundo(){
        return 'Hola mundo desde un servicio de Angular!!!';
    }

    getPeliculas(){
        return this.peliculas;
    }
}