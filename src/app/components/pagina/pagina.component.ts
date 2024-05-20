import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrl: './pagina.component.css',
})
export class PaginaComponent implements OnInit {

  public nombre!: string;
  public apellidos!: string;
  
  public campo!: string;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    
  }

  ngOnInit() {

    this._route.params.subscribe((params: Params)=>{
      this.nombre = params["nombre"];
      this.apellidos = params["apellidos"];
    })
  }

  redireccion(){
    //this._router.navigate(['/formulario']);
    this._router.navigate(['/pagina-de-pruebas', 'Natalia', 'Cristobal']);
  }

  
  hasDadoClick(){
    alert("Has dado click");
  }

  hasSalido(){
    alert("Has salido");
  }
}
