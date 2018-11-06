//import { bootstrap } from '@angular/platform/browser'
//import { RootComponent } from './root.component'
//import { BrowserModule } from '@angular/platform-browser';
//import { Http, HTTP_PROVIDERS } from '@angular/http';
//import { Cookie } from 'ng2-cookies/ng2-cookies';
//var appPromise =bootstrap(RootComponent, [[HTTP_PROVIDERS, HTTP_PROVIDERS]]);
"use strict";
//import { AppModule } from './app.module';
//browserDynamicPlatform().bootstrapModule(AppModule, [[HTTP_PROVIDERS, HTTP_PROVIDERS]);
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=boot.js.map