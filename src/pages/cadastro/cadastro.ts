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
  public estados: Array<Estados>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public usuarioService: UsuarioProvider,
    public estadosService: EstadoProvider
    ) {

      //let dataRegex = "^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$" ;
      let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      this.formCadastro = this.formBuilder.group({
        nome: ['', [Validators.required, Validators.minLength(2)]],
        data_nascimento: ['', Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
        sexo: ['', [Validators.required]],
        uf: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        senha: ['', [Validators.required, Validators.minLength(2)]],
        senha2: ['', [Validators.required, Validators.minLength(2)]],
        termos: [''],
        newsletter: [''],
      })

      

  }

  ionViewDidLoad() {
    this.estados = this.estadosService.listar();
  }


  onSubmit():void{
    this.usuarioService.criar(this.formCadastro.value)
  }

}
