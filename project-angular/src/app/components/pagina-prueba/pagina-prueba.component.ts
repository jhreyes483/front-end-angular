import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina-prueba',
  templateUrl: './pagina-prueba.component.html',
  styleUrl: './pagina-prueba.component.css'
})
export class PaginaPruebaComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ){

  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      console.log(params['id']);
    });
  }
}
