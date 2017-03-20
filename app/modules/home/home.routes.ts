import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";

import { AuthGuard } from "../auth/auth-guard.service";

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent, 
    canActivate: [AuthGuard] 
  }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);