import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { LoginPage } from './../pages/login/login';

import { UsuarioProvider } from './../providers/usuario/usuario.service';
import { EstadoProvider } from '../providers/estado/estado.service';

export const firebaseConfig = {
  apiKey: "AIzaSyArZqAFxV6PPTLBBb0UV7SFwqX3tx_QqhQ",
  authDomain: "ionic-login-cba63.firebaseapp.com",
  databaseURL: "https://ionic-login-cba63.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "566087170897"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UsuarioProvider,
    EstadoProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
