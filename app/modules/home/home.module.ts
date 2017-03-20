import { NgModule } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { HttpModule} from '@angular/http';
import { homeRouting } from "./home.routes";
import { HomeComponent } from "./home.component";
import { HomeService } from "./home.service";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    HttpModule,
    homeRouting
  ],
  providers: [
    HomeService
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }