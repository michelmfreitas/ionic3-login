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

      //regex de validação do e-mail
      let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      //validação do formulário de cadastro
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


  /*
  Função que carrega os estados ao carregar a página de cadastro
  */
  ionViewDidLoad() {
    //carrega os estados do Firebase
    //veja a estrutura em /json/estados.json

    //atribui a this.estados os estados carregados na variável estados em EstadosService
    this.estados = this.estadosService.estados;
  }


  /*
  Função quando submetido o formulário
  */
  onSubmit():void{
    //chama o método criar() no UsuarioService, passando os valores do form como parâmetros
    this.usuarioService.criar(this.formCadastro.value)
  }


  /*
  Função que carrega as cidades referentes ao estado selecionado
  */
  sCidade(estado:any):void{
    this.sCidades = estado.cidades;
    this.cidade = "";
  }


  /*
  Função que compara as duas senhas digitadas no formulário
  */
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
