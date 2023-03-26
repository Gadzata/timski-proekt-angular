import { Component } from "@angular/core";

@Component({
  selector: "app-form-user-input-register",
  templateUrl: "./form-user-input-register.component.html",
  styleUrls: ["./form-user-input-register.component.css"],
})
export class FormUserInputRegisterComponent {
  error: boolean = false;
  email: string = "";
  onClick() {
    if (this.email.length < 5) {
      this.error = true;
    } else {
      this.error = false;
    }
  }
}
