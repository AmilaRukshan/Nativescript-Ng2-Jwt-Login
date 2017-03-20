import { Component } from "@angular/core";
import { AuthService } from "../auth";
import { HomeService } from "./home.service";

@Component({
  moduleId: module.id,
  selector: "ns-home",
  templateUrl: "home.component.html"
})
export class HomeComponent {
  constructor(private authService: AuthService, private homeService: HomeService) {

  }

  load() {

    this.homeService.load()
      .subscribe(
      () => {
        console.log("done");
      },
      (error) => {
        console.log(error);
      }
      );
  }

  logout() {
    this.authService.logout();
  }
}