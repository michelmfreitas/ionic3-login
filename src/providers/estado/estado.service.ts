import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

import { Estados } from './../../models/estados.model';

@Injectable()
export class EstadoProvider {

  

  constructor(
    public af: AngularFireDatabase,
    public http: Http
  ) {
    
  }

  listar():any{
    console.log('listando estados');
    return this.af.database.ref('/estados')
    .once('value')
    .then( (resposta) => {
      console.log(resposta.val());
    })
    .catch( (erro) => {
      console.log(erro);
    })
    /*return [{
        estado: "Minas",
        cidades: [{cidade: "A"}, {cidade: "B"}, {cidade: "C"}],
        sigla: "MG"
      }]*/
  }

}
