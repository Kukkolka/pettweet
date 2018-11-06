//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';
//
//import { routes } from './app.routes';
//import { RootComponent } from './root.component';
//
//@NgModule({
//  imports: [
//    BrowserModule,
//    FormsModule,
//    RouterModule.forRoot(routes)
//  ],
//  declarations: [
//    RootComponent,
////    TweetsComponent,
////    RegisterComponent
//  ],
//  providers: [ ],
//  bootstrap: [ RootComponent ]
//})
//export class AppModule {
//}
import { RouterModule }   from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent }   from './root.component';     
import { TweetsComponent } from './components/Tweets.component';
import { RegisterComponent } from './components/register.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms'
@NgModule({
  imports: [
  HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'tweets',  component: TweetsComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', component: RootComponent }
    ])
  ],
  declarations: [
    RootComponent,
    TweetsComponent,
    RegisterComponent,
  ],
  bootstrap: [ RootComponent ]
})
export class AppModule {
}


