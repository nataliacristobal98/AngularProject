import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css',
  providers: [PeliculaService]
})

export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo!: string;
  public peliculas!: Array<Pelicula>;
  public favorita! : Pelicula;
  public fecha! : any;


  //Primera ejecución, no se recomienda meter funcionalidad, solo para asiganrle propiedasdes de una clase
  constructor(
    private _peliculaService: PeliculaService
  ){
    this.titulo = "Componente peliculas";
    //console.log("CONTRUCTOR LANZADO DE PELICULAS")
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020, 8, 12);
  }

  //Segunda ejecución
  ngOnInit(){
    console.log("EVENTO OnInit INICIADO")
    console.log(this.peliculas)
    console.log(this._peliculaService.holaMundo())
  }

  //Tercera ejecución, se ejecuta frecuentamente con cambios del componente
  ngDoCheck(): void {
    console.log("EVENTO DoCheck INICIADO")
  }

  //Ejecucuón para destruir el componente
  ngOnDestroy(): void {
    console.log("EL COMPONENTE SE VA A ELIMINAR")
  }


  //Metodos aparte
  cambiarTitulo(){
    this.titulo = "El título ha sido cambiado";
  }

  mostrarFavorito(event:any){
    this.favorita = event.pelicula;
  }

}
