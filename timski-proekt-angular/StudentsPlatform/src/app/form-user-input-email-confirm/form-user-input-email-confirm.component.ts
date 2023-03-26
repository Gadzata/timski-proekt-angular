import { Component, Input } from "@angular/core";

@Component({
  selector: "app-form-user-input-email-confirm",
  templateUrl: "./form-user-input-email-confirm.component.html",
  styleUrls: ["./form-user-input-email-confirm.component.css"],
})
export class FormUserInputEmailConfirmComponent {
  @Input() emailCode: string = "";
  error: boolean = false;

  onClick() {
    console.log(this.emailCode);
    if (/^[A-Za-z0-9]*$/.test(this.emailCode)) {
      console.log(true);
      this.error = false;
    } else {
      this.error = true;
      console.log(false);
    }
  }
}
