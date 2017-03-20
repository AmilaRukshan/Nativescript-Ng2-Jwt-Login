import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Http } from '@angular/http';

import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { appRoutes, authProviders } from "./app.routes";

import { AppComponent } from "./app.component";

import { AuthService } from "./modules/auth/auth.service";
import { BackendService } from "./modules/shared/backend.service";

import { AuthModule } from "./modules/auth/auth.module";
import { LoginModule } from "./modules/login/login.module";
import { HomeModule } from "./modules/home/home.module";

let localStorage  = require( "nativescript-localstorage" );

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes),
    NativeScriptHttpModule,
    AuthModule,
    LoginModule,
    HomeModule
  ],
  providers: [
    AuthService,
    BackendService,
    authProviders
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
