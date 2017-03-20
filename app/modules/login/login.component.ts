import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";
import { connectionType, getConnectionType } from "connectivity";
import { prompt } from "ui/dialogs";
import { TextField } from "ui/text-field";

import { User } from "../shared";
import { AuthService } from "../auth";

@Component({
  selector: "gr-login",
  moduleId: module.id,
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  user: User;
  isLoggingIn = true;
  isAuthenticating = false;


  constructor(private router: Router,
    private authService: AuthService) {
    this.user = new User();
  }



  submit() {
    if (!this.user.isValidEmail()) {
      alert("Enter a valid email address.");
      return;
    }

    this.isAuthenticating = true;
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    if (getConnectionType() === connectionType.none) {
      alert("Groceries requires an internet connection to log in.");
      return;
    }

    this.authService.login(this.user)
      .subscribe(
      () => {
        this.isAuthenticating = false;
        this.router.navigate(["/"]);
      },
      (error) => {
        console.log(error);
        alert("Unfortunately we could not find your account.");
        this.isAuthenticating = false;
      }
      );
  }

  signUp() {
    // if (getConnectionType() === connectionType.none) {
    //   alert("Groceries requires an internet connection to register.");
    //   return;
    // }

    // this.userService.register(this.user)
    //   .subscribe(
    //     () => {
    //       alert("Your account was successfully created.");
    //       this.isAuthenticating = false;
    //       this.toggleDisplay();
    //     },
    //     (message) => {
    //       // TODO: Verify this works
    //       if (message.match(/same user/)) {
    //         alert("This email address is already in use.");
    //       } else {
    //         alert("Unfortunately we were unable to create your account.");
    //       }
    //       this.isAuthenticating = false;
    //     }
    //   );
  }

  // forgotPassword() {
  //   prompt({
  //     title: "Forgot Password",
  //     message: "Enter the email address you used to register for Groceries to reset your password.",
  //     defaultText: "",
  //     okButtonText: "Ok",
  //     cancelButtonText: "Cancel"
  //   }).then((data) => {
  //     if (data.result) {
  //       this.userService.resetPassword(data.text.trim())
  //         .subscribe(() => {
  //           alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
  //         }, () => {
  //           alert("Unfortunately, an error occurred resetting your password.");
  //         });
  //     }
  //   });
  // }
}
