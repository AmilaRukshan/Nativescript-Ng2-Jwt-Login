import { Routes } from "@angular/router";

import { AuthGuard } from "./modules/auth/auth-guard.service";

export const authProviders = [
  AuthGuard
];


export const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];