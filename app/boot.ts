//import { bootstrap } from '@angular/platform/browser'
//import { RootComponent } from './root.component'
//import { BrowserModule } from '@angular/platform-browser';
//import { Http, HTTP_PROVIDERS } from '@angular/http';
//import { Cookie } from 'ng2-cookies/ng2-cookies';
//var appPromise =bootstrap(RootComponent, [[HTTP_PROVIDERS, HTTP_PROVIDERS]]);
 

//import { AppModule } from './app.module';

//browserDynamicPlatform().bootstrapModule(AppModule, [[HTTP_PROVIDERS, HTTP_PROVIDERS]);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
