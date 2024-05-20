import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
 
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
 
  @Input() pelicula!: Pelicula;
  constructor() { }

  @Output() marcarFavorito = new EventEmitter;
 
  ngOnInit(): void {
  }

  seleccionar(event: any, pelicula: Pelicula){
    //console.log(pelicula);
    this.marcarFavorito.emit({
      pelicula: pelicula
    })
  }
 
}