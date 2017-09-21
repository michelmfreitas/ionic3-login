import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

import { Usuario } from './../../models/usuario.model';


@Injectable()
export class UsuarioProvider {

  constructor(
    public af: AngularFireDatabase,
    public http: Http
    ) {
    console.log('Hello UsuarioProvider Provider');
  }

  criar(usuario: Usuario) : Promise<void>{
    return this.af.database.ref('/usuarios')
    .push(usuario)
    .then( (resposta)=>{
      console.log(resposta);
    })
    .catch( (erro)=>{
      console.log(erro);
    })
  }

}
