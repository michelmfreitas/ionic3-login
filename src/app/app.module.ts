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
  apiKey: "AIzaSyBmZzIWAFgcMs451yOyqJqEQiZX17jUeNk",
  authDomain: "ketchapp-d6dc7.firebaseapp.com",
  databaseURL: "https://ketchapp-d6dc7.firebaseio.com",
  storageBucket: "ketchapp-d6dc7.appspot.com",
  messagingSenderId: "107085525725"
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
