import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

//models
import { Estados } from './../../models/estados.model';

//providers
import { UsuarioProvider } from './../../providers/usuario/usuario.service';
import { EstadoProvider } from './../../providers/estado/estado.service';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {  

  formCadastro: FormGroup; 
  estados: any;
  sCidades: any;
  cidade: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public usuarioService: UsuarioProvider,
    public estadosService: EstadoProvider
    ) {

      let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      this.formCadastro = this.formBuilder.group({
        nome: ['', [Validators.required, Validators.minLength(2)]],
        data_nascimento: ['', Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
        sexo: ['', [Validators.required]],
        uf: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        termos: [''],
        newsletter: [''],
        senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
        senha2: ['', Validators.required],
    }, {validator: this.matchingPasswords('senha', 'senha2')}); 

  }

  ionViewDidLoad() {
    this.estados = this.estadosService.estados;
  }

  onSubmit():void{
    this.usuarioService.criar(this.formCadastro.value)
  }

  sCidade(estado:any):void{
    this.sCidades = estado.cidades;
    this.cidade = "";
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

}
