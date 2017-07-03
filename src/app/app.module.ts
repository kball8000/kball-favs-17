import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
// import { HomePage } from '../pages/home/home';   // Will probably make more sense if I use blank project.

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
    // FormsModule,
    // HttpModule
  ],
  // entryComponents: [
  //   AppComponent
  //   // HomePage
  // ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    // Facebook    
  ],
  // bootstrap: [IonicApp]
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
``