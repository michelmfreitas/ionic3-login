import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

import { Estados } from './../../models/estados.model';

@Injectable()
export class EstadoProvider {

  estados: FirebaseListObservable<Estados[]>;

  constructor(
    public af: AngularFireDatabase,
    public http: Http
  ) {
    this.estados = this.af.list('/estados');
    console.log(this.estados);
  }

}
